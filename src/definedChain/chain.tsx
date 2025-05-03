import { defineChain } from "viem";

const pharosDevnet = defineChain({
    id: 50002,
    name: 'PharosDevnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Pharos Testnet Token',
        symbol: 'PTT',
    },
    rpcUrls: {
        default: {
            http: ['https://devnet.dplabs-internal.com'],
            webSocket: ['wss://devnet.dplabs-internal.com']
        },
    },
    blockExplorers: {
        default: {
            name: 'Pharos Devnet Explorer',
            url: 'https://pharosscan.xyz/'
        }
    },
});

export { pharosDevnet };