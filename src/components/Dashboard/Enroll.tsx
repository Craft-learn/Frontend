import { useState } from "react";
import { X } from "lucide-react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Enroll = ({ onClose }: { onClose: () => void }) => {
  const [selectedSkill, setSelectedSkill] = useState("Bead Making");
  const [selectedPath, setSelectedPath] = useState("");

 


  const skills = [
    "Baking",
    "Knitting",
    "Leather Craft",
    "Candle Making",
    "Bead Making",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#F9F9F7] rounded-xl shadow-lg p-6 px-8 w-[35%] h-fit relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-dmsans font-bold text-center">
          Become a Certified Artisan
        </h2>

        {/* Select Skill Dropdown */}
        <div className="mt-4">
          <label className="block text-gray-600 text-sm mb-1">
            Select Skill
          </label>
          <div className="w-full border-b border-[#333333] text-[#333333B2]">
            {selectedSkill}
          </div>
          <div className="bg-[#EAEAEA54]   flex flex-col  text-[#323232] text-[16px]">
            {skills.map((skill) => (
              <button
                key={skill}
                className={`text-start p-4  ${
                  skill === selectedSkill ? "bg-[#CCDFDE]" : ""
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Choose Your Path */}
        <div className="py-8">
          <p className="text-gray-600 text-sm">Choose Your Path</p>
          <div className="mt-2 space-y-2">
            <ul className="w-full p-4 space-y-2">
              <li className="flex gap-4">
                <div className="relative h-[20px] w-[20px]">
                  <input
                    type="checkbox"
                    onChange={() => setSelectedPath("experience")}
                    checked={selectedPath === "experience"}
                    className=" appearance-none h-[20px] w-[20px] border-2 rounded-full p-2 checked:border-0 checked:bg-[#669F9D] border-[#9A9992]"
                  />
                </div>
                I’m experienced & need a certificate
              </li>
              <li className="flex gap-4">
                <div className="relative h-[20px] w-[20px]">
                  <input
                    type="checkbox"
                    onChange={() => setSelectedPath("beginner")}
                    checked={selectedPath === "beginner"}
                    className=" appearance-none h-[20px] w-[20px] border-2 rounded-full p-2 checked:border-0 checked:bg-[#669F9D] border-[#9A9992]"
                  />
                </div>
                I'm a beginner & want to learn
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
            <Link
              to={`${
                selectedPath === "beginner"
                  ? "/dashboard/courses"
                  : "/dashboard/assessments"
              }`}
            >
              <Button text={"Let's go"} />
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Enroll;
