import Button from "../Button";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { links } from "../../utils/links";
import WavyLine from "../WavyLine";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const ref = useRef(null);
    const inView = useInView(ref);
 

  return (
    <div>
    <div className="flex h-full w-screen py-16 justify-between">
         <div className="hidden md:flex relative top-38">
        <img src="/design2.png" alt="gradient design" className="z-50"/>
        </div>
     
      <div className=" flex flex-col gap-y-4 py-8 justify-center items-center relative bottom-16 bg-primary h-[100%] self-end ">
      <motion.p
          ref={ref}
          initial={{ opacity: 0, rotateX: 90, translateY: 20 }}
          animate={ { opacity: 1, rotateX: 0, translateY: 0 }}
          transition={{
            duration: 1.2, // Time to complete animation
            ease: "easeInOut",
            delay: 0.3, // Delay before animation starts
          }}
          className={`lg:w-[90%] text-balance  text-[#575757] text-[28px]  md:text-[55px] relative font-chivo  text-center md:leading-[65px] ${
            inView ? "animate-slide-in-left" : ""
          } `}
        >
          Learn a <span className="font-bold italic">Craft On-Chain.</span> Web3
          is for Artisans Too!
        </motion.p>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
          animate={
            inView
              ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
              : { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }
          }
         
          className={`md:max-w-[70%] max-sm:leading-8  text-[24px] font-dmsans bottom-24 text-center px-4  ${
            inView ? "animate-slide-in-right" : ""
          }`}
        >
          Learn a craft, earn more, and step into Web3 effortlessly. No
          experience needed, just your passion to create.
        </motion.p>
        <div className="animate-slideInLeft">
          <Link to={links.register}>
            <Button text="Start Learning" />
          </Link>
        </div>
      </div>
      <div className="flex relative bottom-16 justify-end">
        <img src="/design1.png" alt="gradient design" className=" items-end"/>
      </div>
    </div>
    <WavyLine />
    </div>
  );
};

export default Hero;
