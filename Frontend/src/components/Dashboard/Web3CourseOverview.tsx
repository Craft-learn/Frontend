import { Text, Heading } from "./";
import Button from "../Button";
import React, {useState} from "react";
import Enroll from "./Enroll";

interface Props {
  className?: string;
  courseTitle?: React.ReactNode;
  courseDescription?: React.ReactNode;
  courseAvailability?: React.ReactNode;
  enrollButtonText?: string;
  color?: string;
  button?: string;
  textColor?: string;
}

export default function Web3CourseOverview({
  courseTitle = "Web3 & Digital Finance",
  courseDescription = "Web3 crash course, Crypto & NFT basics, DeFi trading, etc.",
  courseAvailability = "4+ Courses available",
  enrollButtonText = "Enroll Now!",
  color,
  button,
  textColor,
  ...props
}: Props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full gap-6 px-4 py-[18px] bg-gray-50_03 cursor-pointer rounded-[24px] hover:border-blue_gray-900 hover:border-[0.5px] hover:border-solid hover:shadow-xs`}
    >
      <div className={`h-[124px] self-stretch rounded-lg ${color}`} />
      <div className="flex flex-col gap-3.5 self-stretch font-dmsans">
        <div className="flex flex-col items-start gap-2">
          <Heading
            size="heading3xl"
            as="h4"
            className="text-[24px] font-bold text-[#2D2D2D] font-dmsans"
          >
            {courseTitle}
          </Heading>
          <Text
            size="textxl"
            as="p"
            className="w-[92%] text-[16px] font-light italic leading-6 !text-gray-700_02"
          >
            {courseDescription}
          </Text>
        </div>
        <div className="flex items-center justify-between gap-5">
          <Text
            size="textxl"
            as="p"
            className="text-[16px] font-normal !text-gray-700_02"
          >
            {courseAvailability}
          </Text>
          <Button
            text={enrollButtonText}
            color={button}
            textColor={textColor}
            onClick={() => setIsModalOpen(true)} 
          />
        </div>
      </div>
      {isModalOpen && <Enroll onClose={() => setIsModalOpen(false)} />}

    </div>
  );
}
