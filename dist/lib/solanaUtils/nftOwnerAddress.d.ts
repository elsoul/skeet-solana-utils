import { SolanaUtils } from '.';
export declare const nftOwnerAddress: (solanaUtils: SolanaUtils, userWalletAddress: string) => Promise<import("@metaplex-foundation/js").FindNftsByOwnerOutput>;
export declare const nftCollectionOwnerAddress: (solanaUtils: SolanaUtils, userWalletAddress: string, collectionAddress: string) => Promise<string[]>;
export declare const checkOwnerNFTs: (solanaUtils: SolanaUtils, userWalletAddress: string, collectionAddress: string, nftAddresses: string[]) => Promise<{
    status: boolean;
    message: string;
}>;
