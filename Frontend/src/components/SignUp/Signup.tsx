"use client";

import Button from "../Button";
import Input from "../Input";
import { FaCheck } from "react-icons/fa";
import {useState} from "react"
import IPFS from "../../hooks/useIPFS";
import { useNavigate } from "react-router";
import { useAccount } from "wagmi";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [privacyChecked, setPrivacyChecked] = useState<boolean>(false);

  const { address } = useAccount();
  const navigate = useNavigate(); 
  const { uploadToIPFS } = IPFS();

  const createAccount = async (e: { preventDefault: () => void }) => {
    if (!address) {
      alert("Please connect your wallet");
      return;
    }

    e.preventDefault();
    if (!username || !email) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const data = {
        username,
        email,
      };
      const url = await uploadToIPFS(JSON.stringify(data));
      console.log("IPFS Url: ", url);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

 
  return (<div className="bg-primary grid place-items-center py-4">
    <div className="flex h-[80vh] w-[80%] border-1  border-[#424242] shadow-sm rounded-xl self-center items-center justify-center gap-x-8  ">
      <div className="hidden md:flex relative h-full w-full">
          <img
            src={"/weave.png"}
            alt={"craft"}
            
            className="rounded-lg shadow-lg object-cover h-full w-full z-10"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="flex flex-col text-start gap-y-4 ">
            <p className="font-chivo text-font-primary text-center pt-2 md:pt-8 text-xl md:text-[2vw]">
              Create Your CraftLearn Account
            </p>
            <p className="text-font-primary text-balance text-center font-dmsans italic">
            Join CraftLearn and start mastering your favorite craft on-chain! Learn, create, and showcase your skills while earning rewards. Sign up now to begin your journey!
            </p>
          </div>
          <form className="w-full md:w-[70%] self-center gap-2 py-4 md:gap-x-8 md:gap-y-2 ">
            <div className="flex flex-col py-2">
              <label className="">
                Username
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  type="text"
                />
              </label>
            </div>

            <div className="flex flex-col py-2">
              <label className="">
                Email
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tolu@craftlearn.com"
                  type="text"
                />
              </label>
            </div>
            <div className="flex py-4">
              <div className=" flex gap-x-2 items-center">
                <div className="relative h-[20px] w-[20px]">
                  <input
                    type="checkbox"
                    checked={privacyChecked}
                    onChange={() => setPrivacyChecked(!privacyChecked)}
                    className=" appearance-none h-[20px] w-[20px] border-2 rounded-md p-2 checked:border-0 checked:bg-yellow border-[#9A9992]"
                  />
                  {privacyChecked && (
                    <FaCheck
                      size={12}
                      color={"#111A00"}
                      className="absolute top-[5px] left-[5px]"
                      onClick={() => setPrivacyChecked(!privacyChecked)}
                    />
                  )}
                </div>
                <p className="font-chivo md:py-2 self-end font-bold">
                  By Continuing, you agree to CraftLearn’s{" "}
                  <span className="text-yellow">Privacy Policy and Terms</span>{" "}
                  and <span className="text-yellow">Conditions</span>
                </p>
              </div>
            </div>

            <div className="justify-self-center py-2 md:px-12 gap-y-2 grid font-merriweather md:col-span-2">
              <Button onClick={createAccount} text={"Create Account"} />
            </div>
          </form>
        </div>
      </div>
      </div>

  );
}
