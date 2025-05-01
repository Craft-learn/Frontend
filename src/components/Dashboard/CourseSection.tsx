import {
  Text,
  Heading,
  Img,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
} from "./";
import CourseOverview from "./CourseOverview";

export default function BeadMakingCourseSection() {
  return (
    <>
      {/* bead making course section */}
      <div className="flex flex-col gap-5 px-5 bg-[#EAEAE8A8]">
        <Breadcrumb
          separator={
            <Text className="h-[16px] w-[5px] text-[16px] font-normal !text-colors">
              /
            </Text>
          }
          className="flex flex-wrap items-center gap-3"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="lg:text-[13px]">
              <Text
                size="textxl"
                as="p"
                className="text-[16px] font-normal !text-black-900"
              >
                Home{" "}
              </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" className="lg:text-[13px]">
              <Text
                size="textxl"
                as="p"
                className="text-[16px] font-normal !text-black-900"
              >
                Courses
              </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className=" flex items-center w-full gap-4 ">
          <div className="relative h-[448px] bg-[#FEFDFA] rounded-xl p-4 bg-gray-50_03  w-full b  self-start">
            <Img
              src="/bead.png"
              alt="E9d9f543d6d501e"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[416px]  px-2 rounded-lg object-cover"
            />
            <div className="absolute bottom-[15px] left-0 right-0 mx-auto flex flex-1 flex-col items-start gap-4 rounded-bl-lg rounded-br-lg bg-gradient1 p-2">
              <Heading
                size="heading3xl"
                as="h1"
                className="text-[24px] font-bold lg:text-[20px]"
              >
                Bead Making
              </Heading>
              <Text
                size="textxl"
                as="p"
                className="w-full text-[16px] font-normal leading-6 lg:text-[13px]"
              >
                Learn to craft beautiful beadwork using essential techniques and
                patterns. Create unique jewelry and accessories with precision.
              </Text>
            </div>
          </div>
          <div className="flex w-[42%] justify-center bg-[#FEFDFA] rounded-xl md:w-full">
            <div className="flex w-full flex-col gap-8 rounded-[16px] bg-gray-50_03 p-6 sm:p-4">
              <div className="flex items-center gap-4">
                <div className="h-[46px] w-[42px] rounded-md border border-solid border-black-900" />
                <Heading
                  size="heading3xl"
                  as="h2"
                  className="text-[24px] font-bold lg:text-[20px]"
                >
                  Bead Making
                </Heading>
              </div>
              <div className="flex flex-col gap-4">
                <div className="mr-8 flex gap-[54px] md:mr-0 md:flex-row sm:flex-col">
                  <CourseOverview className="w-[34%]" />
                  <CourseOverview
                    estimatedDurationText="Skill Level"
                    weeksCounterText="Beginner to Advanced"
                    courseFormatText="Certification"
                    className="w-[66%]"
                  />
                </div>
                <div className="flex items-start gap-2 sm:flex-col">
                  <div className="h-[24px] w-[20px] rounded-[3px] border-[0.51px] border-solid border-black-900" />
                  <div className="flex flex-1 flex-col items-start gap-2 self-center sm:self-stretch">
                    <Text
                      size="textxs"
                      as="p"
                      className="text-[16px] font-normal"
                    >
                      Learning Outcome
                    </Text>
                    <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
                      <Text as="p" className="text-[15px] font-medium">
                        Master various bead-making techniques
                      </Text>
                      <Text as="p" className="text-[15px] font-medium">
                        Create custom bead accessories (bracelets, earrings,
                        bags, etc.)
                      </Text>
                      <Text as="p" className="text-[15px] font-medium">
                        Understand pricing, branding & selling beadwork
                      </Text>
                      <Text as="p" className="text-[15px] font-medium">
                        Learn how to integrate Web3 into your craft business
                      </Text>
                    </div>
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
