import { SolanaUtils } from '.';
import { StakeRewardParams } from './solanaUtilsTypes';
export declare const lastStakingReward: (solanaUtils: SolanaUtils, stakeAccountAddress: string) => Promise<StakeRewardParams | null>;
