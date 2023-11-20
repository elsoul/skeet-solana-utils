/**
 * Transfers SOL from one wallet to another on the Solana blockchain.
 *
 * @param {string} endpoint - The Solana network endpoint to connect to.
 * @param {number[]} fromWalletKey - The secret key of the sender's wallet as an array of numbers.
 * @param {string} toAddressPubkey - The public key of the recipient's wallet.
 * @param {number} transferAmountLamport - The amount of lamports to transfer.
 * @returns {Promise<boolean>} - A promise that resolves to true upon successful transaction.
 * @throws {Error} - Throws an error if the transaction fails.
 *
 * @example
 * ```
 * const run = async () => {
 *   const endpoint = 'https://api.mainnet-beta.solana.com';
 *   const fromWalletSecretKey = [/* Your Secret Key Array Elements *\/];
 *   const toWalletAddress = 'RecipientPublicKeyHere';
 *   const transferAmount = 1000000; // Amount in lamports
 *
 *   try {
 *     const result = await solanaTransfer(endpoint, fromWalletSecretKey, toWalletAddress, transferAmount);
 *     console.log('Transaction successful:', result);
 *   } catch (error) {
 *     console.error('Transaction failed:', error);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const solanaTransfer: (endpoint: string, fromWalletKey: number[], toAddressPubkey: string, transferAmountLamport: number) => Promise<boolean>;
