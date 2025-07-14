// wallet.ts
import { EthereumProvider } from '@walletconnect/ethereum-provider'

export const initWalletConnect = async () => {
  const provider = await EthereumProvider.init({
    projectId: '7456a1fac497de33a62f217784d1ec70', // Get from https://cloud.walletconnect.com/
    chains: [1], // Mainnet
    showQrModal: true
  })

  await provider.connect()
  return provider
}
