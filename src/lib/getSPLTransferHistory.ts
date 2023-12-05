import { Connection, PublicKey, ConfirmedSignatureInfo } from '@solana/web3.js'
import { writeFileSync } from 'fs'
import { exit } from 'process'

/**
 * Fetches the SPL Transfer history for a given wallet address.
 *
 * @param rpcUrl - The URL of the Solana RPC endpoint.
 * @param accountAddress - The public key of the account to fetch the transfer history for.
 * @param limit - The maximum number of transactions to fetch. Defaults to 100.
 * @param beforeSignature - Fetch transactions before this signature.
 * @returns An array of ConfirmedSignatureInfo for SPL transfer transactions.
 *
 * @example
 * ```typescript
 * const rpcUrl = 'https://api.mainnet-beta.solana.com';
 * const accountAddress = 'TokenAccountAddress';
 *
 * const transfers = await getSPLTransferHistory(rpcUrl, accountAddress);
 * console.log(transfers);
 * ```
 */
export const getSPLTransferHistory = async (
  rpcUrl: string,
  accountAddress: string,
  limit = 100,
  beforeSignature?: string,
): Promise<ConfirmedSignatureInfo[]> => {
  const connection = new Connection(rpcUrl)
  const accountPublicKey = new PublicKey(accountAddress)

  // Fetching the transfer history using getConfirmedSignaturesForAddress2
  let params: { limit: number; before?: string } = {
    limit,
  }
  if (beforeSignature) {
    params['before'] = beforeSignature
  }
  const transferHistory = await connection.getConfirmedSignaturesForAddress2(
    accountPublicKey,
    params,
  )

  return transferHistory
}
import dotenv from 'dotenv'
dotenv.config()

const run = async () => {
  const rpcUrl = process.env.ENDPOINT || 'https://api.mainnet-beta.solana.com'
  console.log(`Using endpoint: ${rpcUrl}`)
  const accountAddress = 'GFC7ZCkgHqWqvSoMG6DRG4XJGMgWsBpGspBQXhrSmRab'

  let transfersNum = 0
  let i = 0
  const transfers = await getSPLTransferHistory(rpcUrl, accountAddress, 1000)
  transfersNum = transfers.length
  while (transfersNum === 1000) {
    try {
      i++
      console.log(`Fetching page ${i}...`)
      const lastTransfer = transfers[transfers.length - 1]
      const nextTransfers = await getSPLTransferHistory(
        rpcUrl,
        accountAddress,
        1000,
        lastTransfer.signature,
      )
      transfersNum = nextTransfers.length
      transfers.push(...nextTransfers)
    } catch (error) {
      console.log(error)
    }
  }
  const outputFile = `./data/${accountAddress}.json`
  writeFileSync(outputFile, JSON.stringify(transfers, null, 2))
  console.log(`Wrote ${transfers.length} transfers to ${outputFile}`)
}

run()
