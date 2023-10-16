import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js'
import { SolanaUtilsOptions } from './solanaUtilsTypes'
import { stakeAccountBalance } from './stakeAccountBalance'
import { lastStakingReward } from './lastStakingReward'
import { checkOwnerNFTs, nftOwnerAddress } from './nftOwnerAddress'

export class SolanaUtils {
  public connection: Connection
  public options: SolanaUtilsOptions

  constructor(options: SolanaUtilsOptions) {
    this.connection = new Connection(options.endpoint)
    this.options = options
  }

  async getStakeAccountBalance(this: SolanaUtils, stakeAccountAddress: string) {
    return await stakeAccountBalance(this, stakeAccountAddress)
  }

  async getLastStakingReward(this: SolanaUtils, stakeAccountAddress: string) {
    return await lastStakingReward(this, stakeAccountAddress)
  }

  async getOwnerNFTs(this: SolanaUtils, userWalletAddress: string) {
    return await nftOwnerAddress(this, userWalletAddress)
  }

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
