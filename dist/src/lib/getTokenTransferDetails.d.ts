import { TransactionSignature } from '@solana/web3.js';
import { TokenExchange } from '..';
/**
 * Fetches the details of a transaction, specifically the token transfer details.
 *
 * @param rpcUrl - The URL of the Solana RPC endpoint.
 * @param signature - The transaction signature.
 * @returns The details of the token transfer in the transaction.
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
export declare const getTokenTransferDetails: (rpcUrl: string, signature: TransactionSignature) => Promise<TokenExchange | null>;
