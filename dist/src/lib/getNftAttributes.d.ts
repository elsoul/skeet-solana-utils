import { NftMetadata } from '../solanaUtilsTypes';
/**
 * Retrieves the attributes of an NFT by its mint address.
 *
 * @param {string} nftAddress - The mint address of the NFT.
 * @param {string} endpoint - The Solana network endpoint to connect to.
 * @returns {Promise<NftMetadata>} - A promise that resolves with the NFT metadata.
 * @throws {Error} - Throws an error if unable to fetch the NFT metadata.
 *
 * @example
 * ```
 * const run = async () => {
 *   try {
 *     const nftData = await getNftAttributes(
 *       'EggwWJZsCjSY7f36zHHevBmuSyTDHzGxVC2PGX5ePsTh',
 *       'https://api.mainnet-beta.solana.com'
 *     );
 *     console.log(nftData);
 *   } catch (error) {
 *     console.error('Error:', error);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const getNftAttributes: (nftAddress: string, endpoint: string) => Promise<NftMetadata>;
/**
 * Fetches JSON data from a given URL.
 *
 * @param {string} url - The URL to fetch JSON data from.
 * @returns {Promise<NftMetadata>} - A promise that resolves with the JSON data.
 * @throws {Error} - Throws an error if unable to fetch or parse the JSON data.
 */
export declare const getJson: (url: string) => Promise<NftMetadata>;
