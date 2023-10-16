export interface SolanaUtilsOptions {
    endpoint: string;
    mintAddress?: string;
    secretKeyPath?: string;
}
export type StakeRewardParams = {
    epoch: number;
    effectiveSlot: number;
    amount: number;
    postBalance: number;
    commission?: number | null | undefined;
    stakeAccountAddress: string;
};
