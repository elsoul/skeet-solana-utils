import { TransactionSignature } from '@solana/web3.js';
import { SolTransferDetailsResponse } from '..';
/**
 * Fetches the details of a transaction, specifically the token transfer details.
 *
 * @param rpcUrl - The URL of the Solana RPC endpoint.
 * @param signature - The transaction signature.
 * @returns {Promise<SolTransferDetailsResponse>} - A promise that resolves with the token transfer details.
 *
 * @example
 * ```typescript
 * const rpcUrl = 'https://api.mainnet-beta.solana.com';
 * const signature = '5verv...'; // Example transaction signature
 *
 * const transferDetails = await getTokenTransferDetails(rpcUrl, signature);
 * console.log(transferDetails);
 * ```
 */
export declare const getSolTransferDetails: (rpcUrl: string, signature: TransactionSignature) => Promise<SolTransferDetailsResponse>;
