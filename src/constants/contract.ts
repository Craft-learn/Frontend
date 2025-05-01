import { ethers } from "ethers";
import craftLearnCredentialABI from "./craftLearnCredentialABI.json";

export const getCraftLearnCredentialContract = (providerOrSigner: ethers.Provider | ethers.Signer) =>
  new ethers.Contract(
    import.meta.env.VITE_CRAFTLEARN as string,
    craftLearnCredentialABI,
    providerOrSigner
  );