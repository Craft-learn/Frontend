import Button from "../components/Button";
import { useEthersSigner } from "../hooks/useEthersSigner";
import { useStoreIPFS } from "../utils/store";
import IPFS from "../hooks/useIPFS";
import { getCraftLearnCredentialContract } from "../constants/contract";
import { toast } from "sonner";

const CertificateCard = () => {
  const signer = useEthersSigner();
  const { ipfsUrl } = useStoreIPFS();
  const { fetchFromIPFS } = IPFS();

  const handleMint = async () => {
    const fetchedDetail = await fetchFromIPFS(ipfsUrl);
    const userDetail = JSON.parse(fetchedDetail);

    const courseName = "Bead Making Mastery Course";
    const tokenURI =
      "https://aquamarine-famous-penguin-727.mypinata.cloud/ipfs/QmUr6JWDGMkwk9pnb9bQvWrG5wfzp4cLDokPfzfeC5YGLK";
    const learnerName = userDetail.username;

    try {
      const contract = signer
        ? getCraftLearnCredentialContract(signer)
        : undefined;
      if (contract) {
        toast.message("Please wait while we process your transaction.");
        const estimatedGas = await contract.mintCredential.estimateGas(
          courseName,
          tokenURI,
          learnerName
        );
        const gasLimit = BigInt(estimatedGas) * BigInt(12) / BigInt(10);
        const tx = await contract.mintCredential(
          courseName,
          tokenURI,
          learnerName,
          {
            gasLimit: gasLimit,
          }
        );

        toast.message("Please wait while we process your transaction.");

        await tx.wait();
        toast.success("Certificate minted successfully!");
      }
    } catch (error) {
      console.error("Error minting certificate: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100">
      <div className="bg-[#F9F9F7] shadow-lg rounded-xl p-8 text-center w-[30vw]">
        <h2 className="text-2xl font-dmsans text-font-sec font-bold">
          Congratulations
        </h2>
        <p className="text-gray-600 mt-2">
          You've successfully completed the <br />{" "}
          <strong>Bead Making Assessment</strong>.
        </p>

        {/* Certificate Image */}
        <div className="flex justify-center my-4">
          <img
            src="/certificate.png"
            alt="Certificate"
            className="w-32 h-24 rounded-md "
          />
        </div>

        <p className="text-gray-700 mb-4">Your Certification is Ready!</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <div>
            <Button color={"bg-white"} text={"Download Certificate"} />
          </div>
          <div>
            <Button onClick={handleMint} text={"Mint Certificate"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
