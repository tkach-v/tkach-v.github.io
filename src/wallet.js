import {EthereumProvider} from '@walletconnect/ethereum-provider'


const projectId = '7456a1fac497de33a62f217784d1ec70' // Get from https://cloud.walletconnect.com/

export const initWalletConnect = async () => {
  const provider = await EthereumProvider.init({
    projectId: projectId,
    chains: [10], // Ethereum Mainnet
    // optionalChains: [1, 10, 137, 42161], // Mainnet, Optimism, Polygon, Arbitrum
    showQrModal: true
  })

  await provider.connect()
  return provider
}
