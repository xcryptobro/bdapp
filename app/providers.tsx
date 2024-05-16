'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  WagmiProvider,
  cookieStorage,
  cookieToInitialState,
  createStorage
} from 'wagmi'
import { mainnet } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string

const config = getDefaultConfig({
  appName: 'Bird Dog NFT',
  projectId: projectId,
  chains: [mainnet],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})

const queryClient = new QueryClient()

export function Providers({
  children,
  cookie
}: {
  children: React.ReactNode
  cookie: string
}) {
  const initialState = cookieToInitialState(config, cookie)

  return (
    <WagmiProvider config={config} {...(initialState ? { initialState } : {})}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
