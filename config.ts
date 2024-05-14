import { getDefaultConfig, getDefaultWallets } from '@rainbow-me/rainbowkit'

import {
  argentWallet,
  trustWallet,
  ledgerWallet
} from '@rainbow-me/rainbowkit/wallets'
import { mainnet, sepolia } from 'wagmi/chains'

const { wallets } = getDefaultWallets()

export const config = getDefaultConfig({
  appName: 'Bird Dog NFT',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [argentWallet, trustWallet, ledgerWallet]
    }
  ],
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : [])
  ],
  ssr: true
})
