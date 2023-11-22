/**
 * Delegates SOL to a validator using an existing stake account.
 *
 * @param {string} endpoint - The Solana network endpoint to connect to.
 * @param {string} authoritySecretString - The secret key of the authority's wallet as a JSON string.
 * @param {string} stakeAccountAddress - The public key address of the stake account.
 * @param {string} validatorVoteAccount - The public key of the validator's vote account.
 * @returns {Promise<string>} - A promise that returns signature if the transaction is successful.
 * @throws {Error} - Throws an error if the transaction fails.
 *
 * @example
 * ```typescript
 * const endpoint = 'https://api.mainnet-beta.solana.com'
 * const authoritySecretString = process.env.AUTHORITY_SECRET_KEY || ''
 * const stakeAccountAddress = 'StakeAccountPublicKeyHere'
 * const validatorVoteAccount = 'ValidatorVoteAccountPublicKeyHere'
 *
 * try {
 *   const result = await delegateStake(endpoint, authoritySecretString, stakeAccountAddress, validatorVoteAccount)
 *   console.log('Stake delegation successful:', result)
 * } catch (error) {
 *   console.error('Stake delegation failed:', error)
 * }
 * ```
 */
export declare const delegateStake: (endpoint: string, authoritySecretString: string, stakeAccountAddress: string, validatorVoteAccount: string) => Promise<string>;
