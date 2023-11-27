/**
 * Creates a stake account on the Solana blockchain.
 *
 * @param {string} endpoint - The Solana network endpoint to connect to.
 * @param {string} authoritySecretString - The secret string of the authority's keypair.
 * @param {string} stakeAccountAddress - The public key of the stake account.
 * @param {number} amount - The amount in SOL to be staked.
 * @returns {Promise<string>} - A promise that resolves with the transaction signature.
 * @throws {Error} - Throws an error if the transaction fails.
 *
 * @example
 * ```
 * const endpoint = 'https://api.mainnet-beta.solana.com';
 * const authoritySecretString = '[1,2,3,...]'; // Replace with actual secret key array
 * const stakeAccountAddress = 'YourStakeAccountPublicKeyHere';
 * const amount = 1; // Amount in SOL to be staked
 *
 * createStakeAccount(endpoint, authoritySecretString, stakeAccountAddress, amount)
 *   .then(signature => console.log('Transaction Signature:', signature))
 *   .catch(error => console.error('Error:', error));
 * ```
 */
export declare const createStakeAccount: (endpoint: string, authoritySecretString: string, stakeAccountAddress: string, amount: number) => Promise<string>;
