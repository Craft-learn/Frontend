import { CloseSVG } from "./Input/close";
import { Img, Input } from "./";
import React from "react";
import ConnectWallet from "../ConnectWallet";
import { Link } from "react-router-dom";
import { links } from "../../utils/links";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex w-screen flex-col  p-8 sm:py-4 z-50 border-b-[0.5px] border-[#EAEAE8A8] bg-primary shadow-md `}
    >
      <div className="container-xs mt-4 flex lg:px-5 md:px-5">
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex gap-10 md:w-full max-sm:flex-col">
            <Link to={links.register}>
              <Img
                src="logo.png"
                alt="Headerlogo"
                className="h-[52px] w-[170px] object-contain"
              />
            </Link>
            <Input
              shape="round"
              name="search"
              placeholder={`Search; Courses, Certificates, Tracks...`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              prefix={
                <Img
                  src="icons/search-normal.png"
                  alt="Contrast"
                  className="h-[20px] w-[20px] object-contain"
                />
              }
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue("")}
                    fillColor="#6c6c6cff"
                  />
                ) : null
              }
              className="gap-2 rounded-[26px] border-[0.5px] border-solid border-[#818181]  text-gray-700 w-[60%]"
            />
          </div>
          <div className="flex  items-center justify-end gap-5 md:w-full">
            <Img src="icons/user-octagon.png" alt="Lock" className="h-[24px]" />
            <div className="mr-4 flex items-center gap-2 self-end">
              <Img
                src="icons/teacher.png"
                alt="Thumbsup"
                className="h-[20px]"
              />
              <ConnectWallet />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
