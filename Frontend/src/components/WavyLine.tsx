import { motion } from "framer-motion";

export default function WavyLine() {
  return (
    <motion.img
      src="/design3.png" // Ensure the path is correct
      alt="Wavy Line"
      className="w-full max-w-screen"
      animate={{
        y: [0, 10, -10, 0], // Moves up and down like water
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}
