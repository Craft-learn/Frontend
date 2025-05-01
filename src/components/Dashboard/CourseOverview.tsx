import { Text, Heading } from "./";
import React from "react";

interface Props {
  className?: string;
  estimatedDurationText?: React.ReactNode;
  weeksCounterText?: React.ReactNode;
  courseFormatText?: React.ReactNode;
  videoLessonsText?: React.ReactNode;
  interactiveQuizzesText?: React.ReactNode;
  handsOnProjectsText?: React.ReactNode;
}

export default function CourseOverview({
  estimatedDurationText = "Estimated  Duration",
  weeksCounterText = "6 Weeks",
  courseFormatText = "Course Format",
  videoLessonsText = "Video Lessons",
  interactiveQuizzesText = "Interactive Quizzes",
  handsOnProjectsText = "Hands-on Projects",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col sm:w-full gap-4`}>
      <div className="flex items-start gap-2 self-stretch">
        <div className="h-[24px] w-[20px] rounded-[3px] border-[0.51px] border-solid border-black-900" />
        <div className="flex flex-1 flex-col items-start justify-center gap-2 self-center">
          <Text size="textxs" as="p" className="text-[12px] font-normal">
            {estimatedDurationText}
          </Text>
          <Heading size="headingmd" as="p" className="text-[14px] font-bold">
            {weeksCounterText}
          </Heading>
        </div>
      </div>
      <div className="flex items-start gap-2 self-stretch">
        <div className="h-[24px] w-[20px] rounded-[3px] border-[0.51px] border-solid border-black-900" />
        <div className="flex flex-1 flex-col items-start gap-2 self-center">
          <Text size="textxs" as="p" className="text-[12px] font-normal">
            {courseFormatText}
          </Text>
          <div className="mr-1.5 flex flex-col items-start justify-center gap-1.5 self-stretch">
            <Text as="p" className="text-[14px] font-medium">
              {videoLessonsText}
            </Text>
            <Text as="p" className="text-[14px] font-medium">
              {interactiveQuizzesText}
 </Text>
            <Text as="p" className="text-[14px] font-medium">
              {handsOnProjectsText}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}