"use client";

import { wagmiAdapter, projectId } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { type ReactNode } from "react";
import {  WagmiProvider} from "wagmi";
import { pharosDevnet } from "../definedChain/chain";

// Set up queryClient
const queryClient = new QueryClient();

// Set up metadata
const metadata = {
  name: "CraftLearn",
  description: "Learn a craft On-chain",
  // url: "http://localhost:5173", // origin must match your domain & subdomain
  url: "https://craftlearn.vercel.app",
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId,
  networks: [pharosDevnet], // [mainnet, arbitrum, avalanche, base, optimism, polygon]
  defaultNetwork: pharosDevnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeMode: 'light',
  themeVariables: {
    "--w3m-accent": "#575757",
    "--w3m-color-mix": "#F9F9F7",
    "--w3m-color-mix-strength": 100,
  },
});

function ContextProvider({
  children,
}: Readonly<{ children: ReactNode | null }>) {
  

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
