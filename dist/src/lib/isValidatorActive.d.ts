import { ValidatorStatusParams } from '@/solanaUtilsTypes';
/**
 * Checks whether a validator is active on the Solana network.
 *
 * @param endpoint - The URL of the Solana RPC endpoint.
 * @param voteAccountPubkey - The public key of the validator's vote account.
 * @returns A `ValidatorStatusParams` object containing the validator's public key, activity status, and the reason for that status.
 *
 * @example
 * ```typescript
 * const endpoint = 'https://api.mainnet-beta.solana.com'
 * const voteAccountPubkey = 'ExampleVoteAccountPubkey'
 *
 * const status = await isValidatorActive(endpoint, voteAccountPubkey)
 * console.log(`Validator status: ${JSON.stringify(status)}`)
 * ```
 *
 * @throws Throws an error if there is a problem accessing the network or querying validator status.
 */
export declare const isValidatorActive: (endpoint: string, voteAccountPubkey: string) => Promise<ValidatorStatusParams>;
