import { Text, Img, Heading } from "./";
import OverviewRow from "./OverviewRow";
import { Suspense } from "react";

const beadMakingOverviewList = [
  { versionText: "1.0", overviewTitle: "Overview of Bead Making", durationText: " 00.15" },
  { versionText: "1.1", overviewTitle: "Overview of Bead Making", durationText: "00.10" },
  { versionText: "1.2", overviewTitle: "Overview of Bead Making", durationText: "00.20" },
  { versionText: "1.3", overviewTitle: "Overview of Bead Making", durationText: "00.15" },
];

export default function Curriculum() {
  return (
    <>
      {/* curriculum overview section */}
      <div className="px-6 sm:px-4 bg-[#F9F9F7] w-full rounded-xl p-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center  justify-between gap-5">
            <Heading size="heading3xl" as="h3" className="text-[24px] font-bold lg:text-[20px]">
              Curriculum
            </Heading>
            <Text size="textxl" as="p" className="mb-1 self-end text-[16px] font-medium !text-cyan-900 lg:text-[13px]">
              Expand All
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center md:flex-col">
              <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
                6 modules
              </Text>
              <div className="flex flex-1 justify-center gap-3 md:self-stretch">
                <div className="flex flex-1 items-center justify-end">
                  <Img src="/clock.png" alt="Clock" className="h-[16px] self-start" />
                  <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
                    11h 25mins of total content
                  </Text>
                </div>
                <div className="flex items-center">
                  <Img src="/note-2.png" alt="Settings" className="h-[16px] self-start" />
                  <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
                    21 Lessons
                  </Text>
                </div>
              </div>
            </div>
            <div>
            <div className="flex flex-col gap-6">
                <div className="flex items-center rounded-lg border border-solid border-gray-200_02 bg-gray-200_51 p-3 md:flex-col">
                  <div className="flex flex-1 items-center gap-2 md:self-stretch">
                    <Img src="/arrow-down.png" alt="Arrowdown" className="h-[16px]" />
                    <Heading as="h4" className="self-end text-[20px] font-bold lg:text-[17px]">
                      Introduction to Bead Making
                    </Heading>
                  </div>
                  <div className="flex w-[44%] justify-center gap-[18px] md:w-full">
                    <div className="flex flex-1 items-center justify-end">
                      <Img src="/clock.png" alt="Clock" className="h-[16px] self-start" />
                      <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
                        1 hr 00 mins
                      </Text>
                    </div>
                    <div className="flex items-center">
                      <Img
                        src="/note-2.png"
                        alt="Settings"
                        className="h-[16px] self-start"
                      />
                      <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
                        4 Lessons
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="mx-6 mb-6 flex flex-col md:mx-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {beadMakingOverviewList.map((d, index) => (
                      <OverviewRow {...d} key={"listoverviewof" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <div className="flex items-center rounded-lg border border-solid border-gray-200_02 bg-gray-200_51 p-3 md:flex-col">
                <div className="flex flex-1 items-center gap-2 md:self-stretch">
                  <Img src="/arrow-down.png" alt="Arrowright" className="h-[16px]" />
                  <Heading as="h5" className="self-end text-[20px] font-bold lg:text-[17px]">
                    Basic Bead Stringing Techniques
                  </Heading>
                  </div>
                <div className="flex w-[42%] justify-center gap-3 md:w-full">
                  <div className="flex flex-1 items-center justify-end">
                    <Img src="/clock.png" alt="Clock" className="h-[16px] self-start" />
                    <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
                       01 hrs .15 mins
                    </Text>
                  </div>
                  <div className="flex items-center">
                    <Img
                      src="/note-2.png"
                      alt="Settings"
                      className="h-[16px] self-start"
                    />
                    <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
                      4 Lessons
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

