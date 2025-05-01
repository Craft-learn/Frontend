import { Text, Img } from "./";
import React from "react";

interface Props {
  className?: string;
  versionText?: React.ReactNode;
  overviewTitle?: React.ReactNode;
  durationText?: React.ReactNode;
}

export default function OverviewRow({
  versionText = "1.0",
  overviewTitle = "Overview of Bead Making",
  durationText = " 00.15",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center self-stretch py-2.5 flex-1`}
    >
      <div className="flex flex-1 gap-4">
        <Img src="/video.png" alt="Image" className="h-[20px]" />
        <Text size="textlg" as="p" className="text-[15px] font-normal">
          {versionText}
        </Text>
        <Text size="textlg" as="p" className="text-[15px] font-normal">
          {overviewTitle}
        </Text>
      </div>
      <Text as="p" className="text-[14px] font-normal !text-gray-600_03">
        {durationText}
      </Text>
    </div>
  );
}
