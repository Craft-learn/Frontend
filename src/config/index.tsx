import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { eduChainTestnet } from 'wagmi/chains'

// Get projectId from https://cloud.reown.com
export const projectId = import.meta.env.VITE_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [eduChainTestnet]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig