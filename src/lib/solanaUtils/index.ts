import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js'
import { SolanaUtilsOptions } from './solanaUtilsTypes'
import {
  checkOwnerNFTs,
  nftCollectionOwnerAddress,
  nftOwnerAddress,
} from './nftOwnerAddress'

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

export class SolanaUtils {
  public connection: Connection
  public options: SolanaUtilsOptions

  /**
   * Creates an instance of SolanaUtils.
   * @param options - The configuration options for SolanaUtils.
   */
  constructor(options: SolanaUtilsOptions) {
    this.connection = new Connection(options.endpoint)
    this.options = options
  }

  // ... rest of your existing methods

  /**
   * Fetches all NFTs owned by a user.
   *
   * @param userWalletAddress - The address of the user's wallet.
   * @returns The NFTs owned by the user.
   */
  async getOwnerNFTs(this: SolanaUtils, userWalletAddress: string) {
    return await nftOwnerAddress(this, userWalletAddress)
  }

  /**
   * Fetches NFT addresses owned by a user in a specific collection.
   *
   * @param userWalletAddress - The address of the user's wallet.
   * @param collectionAddress - The address of the NFT collection.
   * @returns The NFT addresses owned by the user in the specified collection.
   */
  async getOwnerNFTAddresses(
    this: SolanaUtils,
    userWalletAddress: string,
    collectionAddress: string,
  ) {
    return await nftCollectionOwnerAddress(
      this,
      userWalletAddress,
      collectionAddress,
    )
  }

  /**
   * Checks if a user is the owner of specified NFTs in a collection.
   *
   * @param userWalletAddress - The address of the user's wallet.
   * @param collectionAddress - The address of the NFT collection.
   * @param nftAddresses - The addresses of the NFTs to check.
   * @returns An object containing the check status and message.
   */
  async checkNFTsOwner(
    this: SolanaUtils,
    userWalletAddress: string,
    collectionAddress: string,
    nftAddresses: string[],
  ) {
    return await checkOwnerNFTs(
      this,
      userWalletAddress,
      collectionAddress,
      nftAddresses,
    )
  }

  async getCurrentEpoch(): Promise<number> {
    const epochInfo = await this.connection.getEpochInfo()
    return epochInfo.epoch
  }

  lamportsToSol(lamports: number): number {
    return lamports / LAMPORTS_PER_SOL
  }
}
