"use client";

import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import Button from "../Button";
import AnimatedDiv from "../AnimatedDiv";
import { useNavigate } from "react-router";
import { useAccount } from "wagmi";
// import { useEthersProvider } from "../../hooks/useEthersProvider";
import { readOnlyProvider } from "../../constants/providers";
import { getCraftLearnCredentialContract } from "../../constants/contract";
import ConnectWallet from "../ConnectWallet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  // const chainId = useChainId();
  // const provider = useEthersProvider({ chainId });
  const { address, isConnected } = useAccount();
  const provider = readOnlyProvider;
  // const signer = provider2.getSigner();

  // Menu items array
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#FAQS", label: "FAQs" },
  ];
  
  const handleClick = async () => {
    if (!provider) {
      throw new Error("Provider not initialized");
    }
    
    try {
      const contract = getCraftLearnCredentialContract(provider);
      if (!contract) {
        throw new Error("Failed to get contract instance");
      }

      const estimatedGas = await contract.isStudent.estimateGas(address);
      const gasLimit = BigInt(estimatedGas) * BigInt(12) / BigInt(10);
      const isStudent = await contract?.isStudent(address, {
        gasLimit,
      });
      console.log("Is Student: ", isStudent);
      if (isStudent) {
        navigate("/dashboard");
      } else {
        navigate("/signup");
      }
    } catch(error) {
      console.error("Error fetching student status: ", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className=" w-full flex justify-between px-4 md:px-16 items-center py-4  font-chivo">
        <div className="flex md:px-2 gap-x-32 2xl:gap-x-56 items-center justify-between ">
          <div className=" py-2 px-4">
            <img src="/logo.png" alt="CraftLearn logo" />
          </div>
          <div className="hidden md:flex gap-x-4 2xl:gap-x-8 font-chivo md:text-sm 2xl:text-base text-font-primary">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-yellow">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex">
          {isConnected ? <Button onClick={handleClick} text="Get Started" /> :  <ConnectWallet />}
        </div>

        <div className="flex lg:hidden">
          <MdOutlineMenu color="#FFD700" size={32} onClick={toggleMenu} />
        </div>
      </div>

      {isMenuOpen && (
        <AnimatedDiv
          initialX="100%"
          animateX={0}
          exitX={"-100%"}
          duration={1.0}
          className="fixed inset-0 w-screen h-screen  bg-opacity-50 z-10"
        >
          <div className="relative top-8 right-1 flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-[#FFD700] text-3xl"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 bg-[#F9F9F7] text-font-sec h-full p-6 text-xl rounded-md">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="hover:text-[#FFD700]"
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
            <Button text="Start Learning" />
          </div>
        </AnimatedDiv>
      )}
    </div>
  );
};

export default Header;
