import React from "react";
import type { JSX } from "react";

const sizes = {
  texts: "text-[13px] font-medium",
  text2xl: "text-[17px] font-medium lg:text-[14px]",
  text4xl: "text-[40px] font-medium lg:text-[34px] md:text-[38px] sm:text-[36px]",
  text5xl: "text-[45px] font-medium lg:text-[38px] md:text-[41px] sm:text-[35px]",
  text6xl: "text-[51px] font-medium lg:text-[43px] md:text-[43px] sm:text-[37px]",
  headingxs: "text-[11px] font-semibold",
  headings: "text-[12px] font-semibold",
  headingmd: "text-[14px] font-bold",
  headinglg: "text-[15px] font-bold",
  headingxl: "text-[16px] font-semibold lg:text-[13px]",
  heading2xl: "text-[20px] font-semibold lg:text-[17px]",
  heading3xl: "text-[24px] font-bold lg:text-[20px] md:text-[22px]",
  heading4xl: "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
};

export type HeadingProps = Partial<{
  className: string;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "heading2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-blue_gray-900_01 font-dmsans ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
