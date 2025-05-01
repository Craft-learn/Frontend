import { Heading, Img, Text, Button } from "../components/Dashboard";

import Web3CourseOverview from "../components/Dashboard/Web3CourseOverview";
import { Suspense } from "react";

const courseCategoriesList = [
  {
    courseTitle: "Web3 & Digital Finance",
    courseDescription:
      "Web3 crash course, Crypto & NFT basics, DeFi trading, etc.",
    courseAvailability: "4+ Courses available",
    enrollButtonText: "Enroll Now!",
    color: "bg-[#E5EFEF]",
    button: "bg-[#171616]",
    textColor: "text-white",
  },
  {
    courseTitle: "Artisan Skill Development",
    courseDescription:
      "Knitting, Woodwork, Leather crafting, Web3-powered artisan sales.",
    courseAvailability: "4+ Courses available",
    enrollButtonText: "Enroll Now!",
    color: "bg-[#EAEAEA]",
  },
  {
    courseTitle: "Digital Branding & Business Skills",
    courseDescription:
      " Personal Branding, Web3 Marketing, DAO governance, etc.",
    courseAvailability: "4+ Courses available",
    enrollButtonText: "Enroll Now!",
    color: "bg-[#EDE5F3]",
    button: "bg-[#171616]",
    textColor: "text-white",
  },
];

export default function HomePage() {

  return (
    <div className="bg-[#EAEAE8A8]">
      <div className="flex flex-1 flex-col gap-8 bg-gray-200_a8 px-5">
        <div className="mr-3.5 mt-5 flex flex-col gap-5 md:mr-0">
          <div className="flex items-center justify-between gap-5 px-4 py-2 ">
            <Heading
              as="h1"
              className="text-[20px] text-font-sec font-semibold font-dmsans "
            >
              Hi Maverick, Welcome to CraftLearn!
            </Heading>
            <div className="w-[40%] bg-[#FFFBE5] rounded  flex gap-4 p-4  font-medium  ">
              <div className="flex h-[36px] w-[24px] items-center justify-center">
                <Img
                  src="icons/badge.png"
                  alt="🎖"
                  className="h-[26px] w-[24px] object-contain "
                />
              </div>
              <span>
                Earn a ‘Pioneer’ badge for completing your first course
              </span>

              <Img
                src="icons/close-circle.png"
                alt="Close"
                className="h-[26px] w-[24px] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-[26px] bg-[#F6F4F4] p-4">
              <div className="flex w-full flex-col items-start gap-2">
                <p className="!font-chivo text-[32px] font-bold !text-blue_gray-900 lg:text-[27px] md:text-[26px] sm:text-[24px]">
                  Pick Your Learning Track
                </p>
                <Text
                  size="text3xl"
                  as="p"
                  className=" text-[20px] font-normal leading-[26px] w-[70%]"
                >
                  Find the perfect track that aligns with your goals. Whether
                  you&#39;re mastering an artisan skill, diving into Web3
                  finance, or building a digital brand
                </Text>
              </div>
              <div className="flex  w-full h-full items-end self-end justify-end bg-[url(/wavyline.png)] relative top-4 bg-cover bg-no-repeat ">
                <Img
                  src="insect.png"
                  alt="Image"
                  className="h-[146px] w-[32%] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 px-4 ">
            <Suspense fallback={<div>Loading feed...</div>}>
              {courseCategoriesList.map((d, index) => (
                <Web3CourseOverview
                  {...d}
                  key={"listview" + index}
                  className="hover:border-1 px-4 hover:border-[#818181] hover:shadow-lg bg-[#FEFDFA]"
                />
              ))}
            </Suspense>
          </div>
        </div>
        <div className="flex gap-5 p-4">
          <div className="rounded-xl flex flex-1 flex-col items-start gap-4 bg-[#FEFDFA] px-6 py-4  sm:px-4">
            <Heading
              size="heading2xl"
              as="h3"
              className=" text-[20px] font-semibold !text-blue_gray-900 lg:text-[17px]"
            >
              Become a Certified Craftian
            </Heading>
            <div className="flex w-full relative top-8">
              <img src="flow.png" alt="Artisan flow" />
            </div>
          </div>
          <div className="rounded-xl gap-[26px] w-[38%] flex flex-col items-center bg-[#FEFDFA] p-2.5 ">
            <div className=" flex items-center justify-between gap-2 self-stretch">
              <Heading
                size="heading2xl"
                as="h4"
                className="lg:text-[17px] px-2 text-[20px] font-semibold !text-blue_gray-900"
              >
                Leaderboard
              </Heading>
              <div className="rounded-[24px] w-[35%] flex items-center justify-center gap-4 bg-[#F2F2F2] p-2">
                <Button
                  shape="round"
                  className="rounded-[16px] min-w-[86px] border-[#4D8F8C] !border"
                >
                  All Time
                </Button>
                <p className="text-[16px] !font-chivo   text-start">Weekly</p>
              </div>
            </div>
            <div className="flex  relative self-center items-center">
              <div>
                <img src="/leaderboard.png" alt="Leaderboard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
