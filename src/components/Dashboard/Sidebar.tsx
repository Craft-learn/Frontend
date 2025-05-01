import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  Award,
  Settings,
  Trophy,
  BadgeHelp,
  GraduationCap,
  LogOut,
} from "lucide-react";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const navigate = useNavigate();

  // Handler for menu item clicks
  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <Sidebar
      {...props}
      width="306px !important"
      collapsedWidth="80px !important"
      className={`${props.className} flex-col h-screen pt-[42px] top-0 md:pt-2 sm:pt-4 bg-gray-50 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "6px 6px 6px 16px",
            gap: "16px",
            color: "#2d2d2d",
            fontWeight: 400,
            fontSize: "20px",
            borderColor: "transparent",
            borderRightWidth: "8px",
            borderStyle: "solid",
            borderRadius: "4px",
            [`&:hover, &.ps-active`]: {
              color: "#333333",
              borderColor: "#333333",
              backgroundColor: "#ffd700 !important",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "390px" } }}
        className="mt-[76px] flex w-full flex-col self-stretch pl-6 sm:pl-5"
      >
        <div className="flex flex-col gap-4">
          <MenuItem 
            icon={<Home color="#575757" />} 
            onClick={() => handleMenuItemClick("/dashboard")}
          >
            Home
          </MenuItem>
          
          <MenuItem 
            icon={<GraduationCap color="#575757" />} 
            onClick={() => handleMenuItemClick("/dashboard/courses")}
          >
            My Courses
          </MenuItem>
          
          <MenuItem icon={<BookOpen color="#575757" />}
          onClick={() => handleMenuItemClick("/dashboard/assessments")}
          >
           Assessments
          </MenuItem>
          
          <MenuItem 
            icon={<Trophy color="#575757" />} 
            onClick={() => handleMenuItemClick("/dashboard/certificates")}
          >
            Certificates
          </MenuItem>

          <MenuItem icon={<Award color="#575757" />}>
            Rewards
          </MenuItem>
          
          <MenuItem icon={<Settings color="#575757" />}>
            Settings
          </MenuItem>
        </div>
        
        <div className="flex flex-col justify-end h-56 gap-4">
          <MenuItem icon={<BadgeHelp color="#575757" />}>
            Support
          </MenuItem>
          
          <MenuItem icon={<LogOut color="#575757" />}>
            Log Out
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}