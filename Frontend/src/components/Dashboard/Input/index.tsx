import React from "react";

const shapes = {
  round: "rounded-[26px]",
} as const;

const variants = {
  fill: {
    yellow_50: "bg-yellow-50 text-gray-800",
    gray_50_02: "bg-gray-50_02",
  },
} as const;

type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "prefix" | "size"
> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      color = "gray_50_02",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${
          shape && shapes[shape]
        } ${
          variant &&
          (variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ] ||
            variants[variant])
        }`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="w-[80%] py-[8px] focus:outline-none"
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

export { Input };
