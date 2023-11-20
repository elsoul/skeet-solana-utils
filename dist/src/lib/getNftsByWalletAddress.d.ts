/**
 * Retrieves all NFTs owned by a specific wallet address on the Solana blockchain.
 *
 * @param {string} endpoint - The Solana network endpoint to connect to.
 * @param {string} userWalletAddress - The wallet address of the user whose NFTs are to be fetched.
 * @returns {Promise<any[]>} - A promise that resolves with an array of NFTs.
 * @throws {Error} - Throws an error if unable to fetch NFTs for the given address.
 *
 * @example
 * ```
 * const run = async () => {
 *   const solanaEndpoint = 'https://api.mainnet-beta.solana.com';
 *   const walletAddress = 'YourWalletAddressHere';
 *
 *   try {
 *     const nfts = await getNftsByWalletAddress(solanaEndpoint, walletAddress);
 *     console.log('NFTs:', nfts);
 *   } catch (error) {
 *     console.error('Error:', error);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const getNftsByWalletAddress: (endpoint: string, userWalletAddress: string) => Promise<import("@metaplex-foundation/mpl-token-metadata").DigitalAsset[]>;
