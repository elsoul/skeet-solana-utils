import { StakeRewardParams } from '../solanaUtilsTypes';
/**
 * Retrieves the last staking reward for a given stake account on the Solana blockchain.
 *
 * @param endpoint - The URL of the Solana RPC endpoint.
 * @param stakeAccountAddress - The public key of the stake account.
 * @returns An object containing the details of the last staking reward, or `null` if no rewards are found.
 *
 * @example
 * ```typescript
 * const endpoint = 'https://api.mainnet-beta.solana.com'
 * const stakeAccountAddress = 'ExampleStakeAccountAddress'
 *
 * const reward = await getLastStakingReward(endpoint, stakeAccountAddress)
 * if (reward) {
 *   console.log(`Last reward: ${JSON.stringify(reward)}`)
 * } else {
 *   console.log('No rewards found.')
 * }
 * ```
 */
export declare const getLastStakingReward: (endpoint: string, stakeAccountAddress: string) => Promise<StakeRewardParams | null>;
