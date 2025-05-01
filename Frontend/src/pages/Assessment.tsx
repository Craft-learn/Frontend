import { useState } from "react";
import { CheckCircle } from "lucide-react";

import Button from "../components/Button";
import { Link } from "react-router-dom";

const Assessment = () => {
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex bg-[#EAEAE8A8] h-full p-4 rounded-md gap-4">
      <div className=" bg-[#FEFDFA] p-16 rounded-lg shadow-md ">
        <div className=" ">
          <img src={"/icons/book.png"} alt={"assessment"} />
          <h1 className="text-2xl font-bold mb-6">Assessment - Bead Making</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Question 20</h2>
          <p className="text-gray-600 mb-4">
            Show your bead-making skills in a short video showcasing key
            techniques and a finished piece. What Your Video Should Contain:
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center">
              <CheckCircle className="mr-2 text-[#2D2D2D]" size={20} />
              <span>Show your bead-making technique in action</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 text-[#2D2D2D]" size={20} />
              <span>Display the completed piece</span>
            </div>
          </div>
          <p className="font-bold font-chivo  text-font-sec py-2">Submit Video link</p>
          <textarea
            placeholder="Paste your video link here"
            className="w-full mt-4 p-3 border border-[#EAEAEA] focus:outline-none rounded-lg resize-none h-16"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          ></textarea>

          <p className="font-bold font-chivo text-font-sec py-2">Description</p>

          <textarea
            placeholder="Add a short description of your work"
            className="w-full mt-4 p-3 border border-[#EAEAEA] rounded-lg resize-none h-24 focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="flex  gap-x-4 mt-6">
            <Button text={"Back"} color={"bg-white"} />
            <Link to="/dashboard/completed-assessment">
            <Button text={"Finish"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/3 bg-[#FEFDFA] h-fit p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Assessment Overview</h3>
        <p className="text-gray-600 mb-4">
          You're making great progress! Just one last question to answer.
        </p>

        <div className="relative w-full h-32 flex items-center justify-center">
          <img src="/icons/progress.png" alt="progress" />
        </div>

        <div className="text-center py-2">
          <p className="text-sm bg-[#FFFBE5] p-4 text-gray-600">
            Once submitted, your results will be processed and you'll be able to
            view your certificate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
