import { ParsedStakeAccount } from '@/solanaUtilsTypes';
/**
 * Fetches the list of stake accounts associated with a given wallet address.
 *
 * @param {string} walletAddress - The wallet address to query for stake accounts.
 * @param {string} rpcUrl - The Solana RPC endpoint URL.
 * @returns {Promise<ParsedStakeAccount[]>} - A promise that resolves with an array of stake accounts.
 *
 * @example
 * ```
 * const run = async () => {
 *   const endpoint = 'https://api.mainnet-beta.solana.com';
 *   const walletAddress = '<your-authority-keypair>';
 *   const result = await getStakeAccounts(walletAddress, endpoint);
 *   console.log(inspect(result, { depth: null, colors: true }));
 * };
 *
 * run();
 * ```
 */
export declare function getStakeAccounts(walletAddress: string, rpcUrl: string): Promise<{
    publicKey: string;
    account: ParsedStakeAccount;
}[]>;
