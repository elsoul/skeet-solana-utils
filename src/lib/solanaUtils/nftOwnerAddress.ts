import { PublicKey } from '@solana/web3.js'
import { SolanaUtils } from '.'
import { Metaplex } from '@metaplex-foundation/js'

export const nftOwnerAddress = async (
  solanaUtils: SolanaUtils,
  userWalletAddress: string,
) => {
  const metaplex = new Metaplex(solanaUtils.connection)
  const ownerAddress = new PublicKey(userWalletAddress)
  const owner = await metaplex.nfts().findAllByOwner({ owner: ownerAddress })
  return owner
}

export const nftCollectionOwnerAddress = async (
  solanaUtils: SolanaUtils,
  userWalletAddress: string,
  collectionAddress: string,
) => {
  try {
    const ownerNFTs = await nftOwnerAddress(solanaUtils, userWalletAddress)
    const bdlc = ownerNFTs.filter((nft) => {
      const collectionId = nft.collection?.address.toBase58()
      if (collectionId === collectionAddress) {
        return nft
      }
    })
    return bdlc.map((nft) => {
      return nft.address.toBase58()
    })
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
  const noPermissions = nftAddresses.filter((nftAddress) => {
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
