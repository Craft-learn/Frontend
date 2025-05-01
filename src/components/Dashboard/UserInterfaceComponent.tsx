import { Text, Button } from "./";
import React from "react";

interface Props {
  className?: string;
  buttonLabel?: string;
  courseText?: React.ReactNode;
}

export default function UserInterfaceComponent({
  buttonLabel = "2",
  courseText = "Course Information",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center md:w-full`}>
      <Button shape="round" className="min-w-[42px] rounded-[18px] !border px-[15px]">
        {buttonLabel}
      </Button>
      <div className="flex flex-1 items-center gap-1">
        <div className="h-[10px] w-[10px] rounded-[5px] bg-cyan-900" />
        <Text as="p" className="text-[14px] font-normal !text-black-900">
          {courseText}
        </Text>
      </div>
    </div>
  );
}