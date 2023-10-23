/**
 * Configuration options for SolanaUtils.
 */
export interface SolanaUtilsOptions {
    /**
     * The RPC endpoint URL of the Solana cluster.
     */
    endpoint: string;
    /**
     * The mint address of the token (optional).
     */
    mintAddress?: string;
    /**
     * The path to the secret key file (optional).
     */
    secretKeyPath?: string;
}
/**
 * Parameters representing a stake reward.
 */
export type StakeRewardParams = {
    /**
     * The epoch in which the reward occurred.
     */
    epoch: number;
    /**
     * The effective slot at the time of the reward.
     */
    effectiveSlot: number;
    /**
     * The amount of the reward.
     */
    amount: number;
    /**
     * The post-reward balance of the stake account.
     */
    postBalance: number;
    /**
     * The commission taken by the validator (optional).
     */
    commission?: number | null | undefined;
    /**
     * The address of the stake account.
     */
    stakeAccountAddress: string;
};
