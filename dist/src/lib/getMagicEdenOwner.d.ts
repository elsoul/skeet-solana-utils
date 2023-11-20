export declare const MAGIC_EDEN_ADDRESS = "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix";
/**
 * Retrieves the most recent owner of a minted item on Magic Eden, excluding Magic Eden's address.
 *
 * @param {string} endpoint - The Solana network endpoint to connect to.
 * @param {string} mintAddress - The mint address of the NFT or asset.
 * @returns {Promise<string | null>} - A promise that resolves with the address of the most recent owner, or null if not found.
 * @throws {Error} - Throws an error if unable to fetch transaction information.
 *
 * @example
 * ```
 * const run = async () => {
 *   const solanaEndpoint = 'https://api.mainnet-beta.solana.com';
 *   const mintAddress = 'MintAddressHere';
 *
 *   try {
 *     const owner = await getMagicEdenOwner(solanaEndpoint, mintAddress);
 *     console.log('Most Recent Owner:', owner);
 *   } catch (error) {
 *     console.error('Error:', error);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const getMagicEdenOwner: (endpoint: string, mintAddress: string) => Promise<string | null>;
