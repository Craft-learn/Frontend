import React from "react";

const shapes = {
  round: "rounded-[18px]",
} as const;
const variants = {
  gradient: {
    blue_gray_900_01_yellow_A700: "bg-gradient text-blue_gray-900",
  },
  fill: {
    gray_900_01: "bg-gray-900_01 text-white-a700",
  },
  outline: {
    blue_gray_300: "border-blue_gray-300 border border-solid text-gray-900_02",
  },
} as const;
const sizes = {
  sm: "h-[44px] px-6 text-[16px]",
  xs: "h-[36px] px-4 text-[16px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "blue_gray_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-chivo font-medium ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };