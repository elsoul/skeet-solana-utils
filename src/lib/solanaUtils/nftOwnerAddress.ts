import { PublicKey } from '@solana/web3.js'
import { SolanaUtils } from '.'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { fetchAllDigitalAssetByOwner } from '@metaplex-foundation/mpl-token-metadata'
import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters'

export const nftOwnerAddress = async (
  solanaUtils: SolanaUtils,
  userWalletAddress: string,
) => {
  try {
    const publicKey = new PublicKey(userWalletAddress)
    const umi = createUmi(solanaUtils.options.endpoint)
    const nfts = await fetchAllDigitalAssetByOwner(
      umi,
      fromWeb3JsPublicKey(publicKey),
    )
    return nfts
  } catch (error) {
    throw new Error(`Failed to fetch NFTs for address: ${userWalletAddress}`)
  }
}

export const nftCollectionOwnerAddress = async (
  solanaUtils: SolanaUtils,
  userWalletAddress: string,
  collectionAddress: string,
) => {
  try {
    const ownerNFTs = await nftOwnerAddress(solanaUtils, userWalletAddress)
    const collectionNFTs = ownerNFTs.filter((nft) => {
      const collection: any = nft.metadata.collection
      if (collection.__option === 'Some') {
        if (collection.value.key === collectionAddress) {
          return collection.value.key
        }
      }
    })
    const nftAddresses = collectionNFTs.map((nft) => {
      return nft.metadata.mint
    })
    return nftAddresses as string[]
  } catch (error) {
    throw new Error(`Failed to fetch NFTs for address: ${userWalletAddress}`)
  }
}

export const checkOwnerNFTs = async (
  solanaUtils: SolanaUtils,
  userWalletAddress: string,
  collectionAddress: string,
  nftAddresses: string[],
) => {
  const ownerNFTs = await nftCollectionOwnerAddress(
    solanaUtils,
    userWalletAddress,
    collectionAddress,
  )
  const noPermissions = nftAddresses.filter((nftAddress: string) => {
    if (!ownerNFTs.includes(nftAddress)) {
      return nftAddress
    }
  })
  let result = {
    status: false,
    message: '',
  }
  switch (noPermissions.length) {
    case 0:
      result = {
        status: true,
        message: 'All NFTs are owned by the user.',
      }
      return result
    default:
      result = {
        status: false,
        message: `The user does not own the following NFTs: ${noPermissions.join(
          ', ',
        )}`,
      }
      return result
  }
}
