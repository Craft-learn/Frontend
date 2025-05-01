import {Link} from "react-router-dom";
import { footerLinks } from "../../utils/links";

const FooterLinks = () => {
  return (
    <>
      {footerLinks.map(({name, links}) => (
        <div key={name} className="grid gap-y-2 font-chivo text-sm text-[#F9F9F7]">
          <h4 className="py-2 h-[35px] border-b-2 border-font-primary text-base w-fit">
            {name}
          </h4>
          {links.map((link) => (
            <Link  key={link.name} to={link.href}>{link.name}</Link>
          ))}
        </div>
      ))}
    </>
  );
};
export default FooterLinks;
