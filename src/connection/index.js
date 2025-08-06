import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { defineChain } from "@reown/appkit/networks";

// 1. Get projectId
const projectId = import.meta.env.VITE_PROJECTID;


const crossFiTestnet = defineChain({
  id: 4157,
  caipNetworkId: "eip155:4157",
  chainNamespace: "eip155",
  name: "CrossFi Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "XFI",
    symbol: "XFI",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.ms"],
    },
  },

  blockExplorers: {
    default: {
      name: "XFI Scan",
      url: "https://test.xfiscan.com",
    },
  },
});

const networks = [crossFiTestnet];

// 3. Create a metadata object - optional
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "http://localhost:5173", // origin must match your domain & subdomain
  icons: ["./mark.svg"],
};

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  }
});