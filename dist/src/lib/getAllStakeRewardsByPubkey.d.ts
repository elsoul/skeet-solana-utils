import { RewardDataResponse } from '@/solanaUtilsTypes';
/**
 * Retrieves all staking rewards for a given public key.
 *
 * @param {string} endpoint - The Solana network endpoint to connect to.
 * @param {string} pubkey - The public key of the account for which to retrieve staking rewards.
 * @returns {Promise<RewardDataResponse>} - A promise that resolves to a RewardDataResponse object containing the total reward amount, total balance, and individual rewards for each stake account.
 * @throws {Error} - Throws an error if unable to fetch the stake accounts or rewards.
 *
 * @example
 * ```
 * const endpoint = 'https://api.mainnet-beta.solana.com';
 * const publicKey = 'YourPublicKeyHere';
 *
 * try {
 *   const rewardData = await getAllStakeRewardsByPubkey(endpoint, publicKey);
 *   console.log('Stake rewards data:', rewardData);
 * } catch (error) {
 *   console.error('Error fetching stake rewards:', error);
 * }
 * ```
 */
export declare const getAllStakeRewardsByPubkey: (endpoint: string, pubkey: string) => Promise<RewardDataResponse>;
