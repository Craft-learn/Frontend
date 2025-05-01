import React from "react";
import type { JSX } from "react";

const sizes = {
  textxs: "text-[12px] font-normal",
  textmd: "text-[14px] font-normal",
  textlg: "text-[15px] font-normal",
  textxl: "text-[16px] font-normal lg:text-[13px]",
  text3xl: "text-[20px] font-normal lg:text-[17px]",
};

export type TextProps = Partial<{
  className: string;
  as: keyof JSX.IntrinsicElements | React.ElementType;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textmd",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-900_01 font-dmsans ${className} ${sizes[size as keyof typeof sizes]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };