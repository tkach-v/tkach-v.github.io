import {initWalletConnect} from './wallet'
import {ethers} from 'ethers'
import Button from "./components/ui/Button";
import {API_CONFIG} from "./config/api";

const TestWeb3 = () => {
  const handleConnect = async () => {
    console.log("Connecting to Wallet...");

    const provider = await initWalletConnect()
    const ethersProvider = new ethers.BrowserProvider(provider)
    const signer = await ethersProvider.getSigner()
    const address = await signer.getAddress()

    console.log('Connected address:', address)

    // 1. Fetch nonce from backend
    const res = await fetch(`${API_CONFIG.BASE_URL}/wallets/connect-external`, {
      method: 'POST',
      body: JSON.stringify({ address }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const { nonce } = await res.json()

    // 2. Sign nonce
    const signature = await signer.signMessage(`Sign to verify: ${nonce}`)

    console.log('Verifying signature in with body:', {
      address,
      signature,
    })

    // 3. Send signature to backend
    await fetch(`${API_CONFIG.BASE_URL}/wallets/verify-signature`, {
      method: 'POST',
      body: JSON.stringify({
        address: address,
        signature: signature,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return <Button onClick={handleConnect}>Connect Wallet</Button>
};

export default TestWeb3;