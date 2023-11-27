import { ConfirmedSignatureInfo } from '@solana/web3.js';
/**
 * Fetches the SPL Transfer history for a given wallet address.
 *
 * @param rpcUrl - The URL of the Solana RPC endpoint.
 * @param accountAddress - The public key of the account to fetch the transfer history for.
 * @param limit - The maximum number of transactions to fetch. Defaults to 100.
 * @param beforeSignature - Fetch transactions before this signature.
 * @returns An array of ConfirmedSignatureInfo for SPL transfer transactions.
 *
 * @example
 * ```typescript
 * const rpcUrl = 'https://api.mainnet-beta.solana.com';
 * const accountAddress = 'TokenAccountAddress';
 *
 * const transfers = await getSPLTransferHistory(rpcUrl, accountAddress);
 * console.log(transfers);
 * ```
 */
export declare const getSPLTransferHistory: (rpcUrl: string, accountAddress: string, limit?: number, beforeSignature?: string) => Promise<ConfirmedSignatureInfo[]>;
