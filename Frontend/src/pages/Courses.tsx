import { CheckBox, Text, Heading } from "../components/Dashboard";
import CourseSection from "../components/Dashboard/CourseSection";
import Curriculum from "../components/Dashboard/Curriculum";
import Button from "../components/Button";

export default function CoursesPage() {
  return (
    <div className="flex flex-1 flex-col gap-5 5 bg-[#EAEAE8A8] py-5">
      {/* bead making course section */}
      <CourseSection />
      <div className="flex w-full gap-4 px-6 py-2">
        <div className="flex-1 rounded-[16px]  ">
          {/* curriculum overview section */}
          <Curriculum />
        </div>
        <div className="flex w-[40%]  flex-col gap-4  rounded-xl bg-[#F9F9F7]  h-[58vh] self-center px-4 ">
          <div className=" flex flex-col items-start justify-center py-4">
            <Heading
              as="h6"
              className="text-[24px] font-semibold lg:text-[17px]"
            >
              Start learning today!
            </Heading>
            <Text
              size="textxs"
              as="p"
              className="w-[84%] text-[15px] font-normal leading-4 py-2 w-full"
            >
              Gain hands-on expertise and industry-recognized certification.
              Elevate your skills and stand out in your field!
            </Text>
          </div>
          <div className="flex items-start justify-between sm:flex-col">
            <div className="flex flex-col gap-4 items-start  border-gray-600_77 py-4 ">
              <Text
                size="textxs"
                as="p"
                className="text-[18px] space-y-2 font-medium !text-gray-600_01"
              >
                Free Plan (Get Started for Free!)
              </Text>
              <div className="flex flex-col items-start gap-3 self-stretch">
                <CheckBox
                  name="accesstobeginne"
                  label="Access to beginner modules (Module 1-3)"
                  id="accesstobeginne"
                  className="gap-2 text-[12px] text-blue_gray-900"
                />
                <CheckBox
                  name="stepbystepvideo"
                  label="Step-by-step video tutorials"
                  id="stepbystepvideo"
                  className="gap-2 text-[12px] text-blue_gray-900"
                />
                <CheckBox
                  name="nocertification"
                  label="No certification"
                  id="nocertification"
                  className="gap-2 text-[12px] text-blue_gray-900"
                />
              </div>
              <Button text={" Start Learning for Free "} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
