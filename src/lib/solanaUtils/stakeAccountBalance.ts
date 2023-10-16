import { PublicKey } from '@solana/web3.js'
import { SolanaUtils } from '@/lib/solanaUtils'

export const stakeAccountBalance = async (
  solanaUtils: SolanaUtils,
  stakeAccountAddress: string,
) => {
  const stakeAccountPublicKey = new PublicKey(stakeAccountAddress)
  const accountInfo = await solanaUtils.connection.getAccountInfo(
    stakeAccountPublicKey,
  )

  if (!accountInfo) {
    throw new Error(
      `Failed to fetch account info for address: ${stakeAccountAddress}`,
    )
  }

  return solanaUtils.lamportsToSol(accountInfo.lamports)
}
