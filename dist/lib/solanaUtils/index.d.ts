import { Connection } from '@solana/web3.js';
import { SolanaUtilsOptions } from './solanaUtilsTypes';
/**
 * A utility class for interacting with Solana blockchain.
 *
 * ### Initialization Example:
 * ```typescript
 * const solanaUtils = new SolanaUtils({
 *   endpoint: 'https://api.devnet.solana.com',
 * })
 * const nfts = await solanaUtils.getOwnerNFTAddresses(
 *   'user-wallet-address',
 *   'collection-address',
 * )
 * ```
 */
export declare class SolanaUtils {
    connection: Connection;
    options: SolanaUtilsOptions;
    /**
     * Creates an instance of SolanaUtils.
     * @param options - The configuration options for SolanaUtils.
     */
    constructor(options: SolanaUtilsOptions);
    /**
     * Fetches all NFTs owned by a user.
     *
     * @param userWalletAddress - The address of the user's wallet.
     * @returns The NFTs owned by the user.
     */
    getOwnerNFTs(this: SolanaUtils, userWalletAddress: string): Promise<import("@metaplex-foundation/mpl-token-metadata").DigitalAsset[]>;
    /**
     * Fetches NFT addresses owned by a user in a specific collection.
     *
     * @param userWalletAddress - The address of the user's wallet.
     * @param collectionAddress - The address of the NFT collection.
     * @returns The NFT addresses owned by the user in the specified collection.
     */
    getOwnerNFTAddresses(this: SolanaUtils, userWalletAddress: string, collectionAddress: string): Promise<string[]>;
    /**
     * Checks if a user is the owner of specified NFTs in a collection.
     *
     * @param userWalletAddress - The address of the user's wallet.
     * @param collectionAddress - The address of the NFT collection.
     * @param nftAddresses - The addresses of the NFTs to check.
     * @returns An object containing the check status and message.
     */
    checkNFTsOwner(this: SolanaUtils, userWalletAddress: string, collectionAddress: string, nftAddresses: string[]): Promise<{
        status: boolean;
        message: string;
    }>;
    getCurrentEpoch(): Promise<number>;
    lamportsToSol(lamports: number): number;
}
