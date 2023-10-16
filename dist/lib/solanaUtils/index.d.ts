import { Connection } from '@solana/web3.js';
import { SolanaUtilsOptions } from './solanaUtilsTypes';
export declare class SolanaUtils {
    connection: Connection;
    constructor(options: SolanaUtilsOptions);
    getStakeAccountBalance(this: SolanaUtils, stakeAccountAddress: string): Promise<number>;
    getLastStakingReward(this: SolanaUtils, stakeAccountAddress: string): Promise<import("./solanaUtilsTypes").StakeRewardParams | null>;
    getOwnerNFTs(this: SolanaUtils, userWalletAddress: string): Promise<import("@metaplex-foundation/js").FindNftsByOwnerOutput>;
    checkNFTsOwner(this: SolanaUtils, userWalletAddress: string, collectionAddress: string, nftAddresses: string[]): Promise<{
        status: boolean;
        message: string;
    }>;
    getCurrentEpoch(): Promise<number>;
    lamportsToSol(lamports: number): number;
}
