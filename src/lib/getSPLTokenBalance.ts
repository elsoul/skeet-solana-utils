import { Connection, PublicKey } from '@solana/web3.js'
/**
 * Fetches the balance of a specified SPL token for a given wallet address.
 *
 * @param rpcUrl - The URL of the Solana RPC endpoint.
 * @param ownerAddress - The public key of the wallet owner.
 * @param mintAddress - The mint address of the SPL token.
 * @returns The balance of the SPL token in the specified wallet.
 *
 * @example
 * ```typescript
 * const rpcUrl = 'https://rpc.helius.xyz/?api-key=<API_KEY>'
 * const ownerAddress = 'EPiCHbeCzokXifRK6m91uwFM5A5XVoS6cgwM2JuLXVdC'
 * const mintAddress = 'CvB1ztJvpYQPvdPBePtRzjL4aQidjydtUz61NWgcgQtP'
 *
 * const result = await getSPLTokenBalance(rpcUrl, ownerAddress, mintAddress)
 * console.log(result)
 * ```
 */
export const getSPLTokenBalance = async (
  rpcUrl: string,
  ownerAddress: string,
  mintAddress: string,
): Promise<number> => {
  const connection = new Connection(rpcUrl)
  const ownerPublicKey = new PublicKey(ownerAddress)
  const parsedTokenAccounts = await connection.getParsedTokenAccountsByOwner(
    ownerPublicKey,
    {
      programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // SPL Token program id
      mint: new PublicKey(mintAddress),
    },
  )

  if (!parsedTokenAccounts.value.length) {
    return 0
  }

  const accountInfo = parsedTokenAccounts.value[0].account.data.parsed.info
  return accountInfo.tokenAmount.uiAmount
}
