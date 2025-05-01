import { useStoreIPFS } from "../utils/store";
import axios from "axios";
import { useState } from "react";

export const useIPFS = () => {
    const { setIpfsUrl} = useStoreIPFS();

    const [isLoading, setIsLoading] = useState(false);

  const uploadToIPFS = async (data: string) => {
    try {
      setIsLoading(true);
      if (isLoading) {
        alert("Please wait while we upload your data.");
      }
      
      const jsonData = JSON.stringify(data);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const file = new File([blob], 'user_data.json', { type: 'application/json' });

      const formData = new FormData();
      formData.append("file", file);

      const pinata_api = import.meta.env.VITE_PINATA_API_KEY;
      const pinata_secret = import.meta.env.VITE_PINATA_SECRET_API_KEY;
      // console.log("Pinata API Key: ", pinata_api);
      //   console.log("Pinata Secret API Key: ", pinata_secret);

      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: pinata_api,
            pinata_secret_api_key: pinata_secret,
          },
        }
      );

      const fileUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      setIpfsUrl(fileUrl);
      return fileUrl;
    } catch (error) {
      alert("Error uploading to IPFS");
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFromIPFS = async (ipfsURL: string) => {
  try {
    const gateways = [
      // 'https://cloudflare-ipfs.com/ipfs/', keeps failing
      'https://ipfs.io/ipfs/'
    ];

    for (const gateway of gateways) {
      try {
        const fullUrl = ipfsURL.replace('https://gateway.pinata.cloud/ipfs/', gateway);
        const response = await axios.get(fullUrl);
        return response.data;
      } catch (gatewayError) {
        console.log(`Failed gateway: ${gatewayError}`);
      }
    }

    throw new Error('All IPFS gateways failed');
  } catch (error) {
    alert("Error fetching from IPFS");
    console.error("Detailed IPFS fetch error:", error);
    throw error;
  }
};

  return {
    uploadToIPFS,
    fetchFromIPFS,
    isLoading,
  }
};

export default useIPFS;