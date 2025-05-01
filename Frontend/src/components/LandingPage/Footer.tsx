import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import { socials } from "../../utils/socials";

const Footer = () => {
  return (
    <footer className="bg-[#1A0000] flex flex-col lg:flex-row gap-y-8 gap-x-4 py-4 md:p-4  lg:p-1 lg:h-[50vh] justify-center  items-center rounded-md">
      {/* Left container */}
      <div className="bg-footer flex-grow w-[90vw]  lg:w-[35%] h-full justify-center lg:h-[90%] border-[1px] p-8 border-[#FCFBF726] rounded-lg">
      <div className="">
          <img src="/logowhite.png" alt="CraftLearn logo"  />
          </div>
        <div className="grid md:flex lg:flex-col md:justify-between h-full lg:h-[90%] items-start text-start gap-x-8">
          <p className="py-4 md:self-end lg:self-start font-dmsans md:w-[25%] lg:w-[65%] xl:w-[50%] text-[#F9F9F7] text-[20px]">
          Learn a Craft On-Chain. Web3 is for Artisans Too!
          </p>
          <div className="flex gap-x-4 justify-center items-center lg:self-center border-[0.74px] border-[#FFFFFF40] rounded-xl drop-shadow-md h-[85px] md:h-[70px] w-fit md:max-w-[30vw] lg:min-w-[25vw] xl:min-w-[40%] md:w-fit px-[5px] md:px-[1vw]">
            {socials.map((social) => (
              <Link to={social.link} key={social.socialsType}>
                <img
                  alt={social.socialsType}
                  src={social.imageSrc}
                  width="45"
                  height="45"
                  className="bg-[#FFD7001A] rounded-md p-[1vw] md:p-[0.5vw]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right container */}
      <div className="flex flex-col flex-grow w-[90vw]  h-full gap-y-2 lg:h-[90%]">
        <div className="grid grid-cols-2  gap-y-4  justify-center  border-[1px] p-8 border-[#FCFBF726] rounded-lg">
          <FooterLinks />
        </div>
        <div className=" flex font-merriweather items-center px-4 text-[#9A9992] text-sm justify-between h-24 lg:h-[30%] rounded-lg border-[1px] border-[#FCFBF726]">
          <span>All rights reserved</span>
          <span>© Copyright 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
