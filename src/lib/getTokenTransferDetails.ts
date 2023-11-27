import { Connection, TransactionSignature } from '@solana/web3.js'
import { SolanaTransaction, TokenExchange } from '..'

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
export const getTokenTransferDetails = async (
  rpcUrl: string,
  signature: TransactionSignature,
): Promise<TokenExchange | null> => {
  // Define a more specific type for the return value if possible
  const connection = new Connection(rpcUrl)

  const transactionDetails = (await connection.getParsedTransaction(
    signature,
  )) as unknown as SolanaTransaction

  if (transactionDetails.meta.err !== null) {
    console.log('Transaction failed')
    return null
  }

  const instructionType =
    transactionDetails.meta.innerInstructions[0].instructions[0].parsed.type
  if (instructionType !== 'transfer') {
    console.log('No token transfer in this transaction')
    return null
  }

  const owner =
    transactionDetails.meta.innerInstructions[0].instructions[0].parsed.info
      .authority
  const preTokenBalances = transactionDetails.meta.preTokenBalances
  const postTokenBalances = transactionDetails.meta.postTokenBalances
  const diffTokenBalances = postTokenBalances.map((postTokenBalance) => {
    const preTokenBalance = preTokenBalances.find(
      (preTokenBalance) =>
        preTokenBalance.accountIndex === postTokenBalance.accountIndex,
    )
    return {
      accountIndex: postTokenBalance.accountIndex,
      mint: postTokenBalance.mint,
      uiTokenAmount: {
        decimals: postTokenBalance.uiTokenAmount.decimals,
        amount:
          Number(postTokenBalance.uiTokenAmount.amount) -
          Number(preTokenBalance?.uiTokenAmount.amount),
        uiAmount: postTokenBalance.uiTokenAmount.uiAmount,
      },
    }
  })

  const token1 = diffTokenBalances[0].mint
  const token1Amount = diffTokenBalances[0].uiTokenAmount.amount
  const token1Decimal = diffTokenBalances[0].uiTokenAmount.decimals
  const token2 = diffTokenBalances[1].mint
  const token2Amount = diffTokenBalances[1].uiTokenAmount.amount
  const token2Decimal = diffTokenBalances[1].uiTokenAmount.decimals
  let result = {
    owner,
    direction: 'buy',
    token1,
    token1Amount: token1Amount / 10 ** token1Decimal,
    token2,
    token2Amount: token2Amount / 10 ** token2Decimal,
  } as TokenExchange
  if (token1Amount > 0) {
    result.direction = 'buy'
  } else {
    result.direction = 'sell'
  }
  return result
}
