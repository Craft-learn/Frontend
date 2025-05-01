import { motion } from "framer-motion";

const Button = ({ text, color, textColor, onClick }: { text: string, color?: string, textColor?: string, onClick?: (e: React.FormEvent) => void }) => {
    return (
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} onClick={onClick} className={ ` ${color ?? "bg-yellow"} px-4 rounded-full py-[6px] border border-[#969696] border-r-0 ${color ? "border-b-1" : "border-b-0"} border-l-[4px] border-t-[2px] ${textColor ?? "text-fontPrimary"} font-chivo`}>
        {text}
      </motion.button>
    );
  };
  export default Button;
  