import { PublicKey } from '@solana/web3.js'
import { SolanaUtils } from '.'
import { StakeRewardParams } from './solanaUtilsTypes'

export const lastStakingReward = async (
  solanaUtils: SolanaUtils,
  stakeAccountAddress: string,
) => {
  const currentEpoch = await solanaUtils.getCurrentEpoch()
  const stakeAccountPublicKey = new PublicKey(stakeAccountAddress)
  const rewards = await solanaUtils.connection.getInflationReward(
    [stakeAccountPublicKey],
    currentEpoch - 1,
  )

  if (rewards && rewards.length > 0 && rewards[0]) {
    const response = {
      stakeAccountAddress,
      ...rewards[0],
    }
    return response as StakeRewardParams
  }
  return null
}
