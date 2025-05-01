import { Link } from "react-router-dom";
import ConnectWallet from "../ConnectWallet";
import { links } from "../../utils/links";

const Header = () => {
  return (
    <div className="bg-primary h-full w-screen flex justify-between z-50 border-b border-[#F9F9F7] shadow-md px-4 md:p-4 md:px-16 items-center font-chivo">
      <Link to={links.register}>
      <div className="">
        <img src="/logo.png" alt="CraftLink logo" />
      </div>
      </Link>
      <ConnectWallet />
    </div>
  );
};

export default Header;
