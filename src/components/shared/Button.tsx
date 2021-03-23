import cc from "classcat";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { DOMAttributes, ReactNode, VFC } from "react";

type Common = {
  id: string;
  children: ReactNode;
  size?: "large" | "small" | "same" | "vertical";
  bgColor?: "red" | "blue" | "green" | "orange" | "black" | "gray" | "white" | "transparent" | "ghost";
  borderColor?: "red" | "blue" | "green";
  textColor?: "black" | "red" | "blue" | "green";
  className?: string;
  disabled?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};

type Button = Common & {
  button: boolean;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

type Link = Common & { linkProps: LinkProps; external?: boolean };

// props の型がbutton型かlink型かを判断する関数を定義する。
// props に button を持っている場合は true
const isButton = (props: Button | Link): props is Button => {
  return "button" in props;
};

export const Button: VFC<Button | Link> = (props) => {
  const className = cc([
    "rounded-full focus:outline-none inline-flex items-center flex-row justify-center font-bold",
    {
      "py-4 px-8": props.size === "large",
      "py-2 px-4": props.size === "small",
      "p-2": props.size === "same",
      "py-1": props.size === "vertical",
    },
  ]);

  const colorClassName = cc({
    "text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:bg-red-600 focus:ring-red-400": props.bgColor === "red",
    "text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:bg-blue-600 focus:ring-blue-400":
      props.bgColor === "blue",
    "text-white bg-green-500 hover:bg-green-600 focus:ring-2 focus:bg-green-600 focus:ring-green-400":
      props.bgColor === "green",
    "text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:bg-yellow-600 focus:ring-yellow-400":
      props.bgColor === "orange",
    "text-black bg-gray-300 hover:bg-gray-400": props.bgColor === "gray",
    "text-white bg-black hover:bg-gray-500": props.bgColor === "black",
    "bg-white hover:bg-gray-300": props.bgColor === "white",
    "bg-transparent": props.bgColor === "transparent",
    "bg-transparent hover:bg-gray-300 dark:hover:bg-gray-500": props.bgColor === "ghost",
    "border border-red-500 hover:bg-red-100 focus:ring-red-300": props.borderColor === "red",
    "border border-blue-500 hover:bg-blue-100 focus:ring-blue-300": props.borderColor === "blue",
    "border border-green-500 hover:bg-green-100 focus:ring-green-300": props.borderColor === "green",
    "text-black dark:text-white": props.bgColor === "transparent" && props.textColor === "black",
    "text-red-500": props.bgColor === "transparent" && props.textColor === "red",
    "text-blue-500": props.bgColor === "transparent" && props.textColor === "blue",
    "text-green-500": props.bgColor === "ghost" || "transparent" && props.textColor === "green",
  });

  const iconClassName = cc([
    "my-auto",
    {
      "mr-3": props.startIcon && props.size === "large",
      "mr-2": props.startIcon && props.size === "small",
      "ml-3": props.endIcon && props.size === "large",
      "ml-2": props.endIcon && props.size === "small",
    },
  ]);

  if (props.disabled) {
    return (
      <button
        type="button"
        className={cc(["text-gray-400 bg-gray-300 cursor-not-allowed", className, props.className])}
        disabled={props.disabled}
      >
        {props.startIcon ? <span className={iconClassName}>{props.startIcon}</span> : null}
        <span>{props.children}</span>
        {props.endIcon ? <span className={iconClassName}>{props.endIcon}</span> : null}
      </button>
    );
  }

  return isButton(props) ? (
    <button type="button" onClick={props.onClick} className={cc([className, colorClassName, props.className])}>
      {props.startIcon ? <span className={iconClassName}>{props.startIcon}</span> : null}
      <span>{props.children}</span>
      {props.endIcon ? <span className={iconClassName}>{props.endIcon}</span> : null}
    </button>
  ) : (
    <Link {...props.linkProps}>
      <a
        className={cc([className, colorClassName, props.className])}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {props.startIcon ? <span className={iconClassName}>{props.startIcon}</span> : null}
        <span>{props.children}</span>
        {props.endIcon ? <span className={iconClassName}>{props.endIcon}</span> : null}
      </a>
    </Link>
  );
};

// Propsのデフォルト値
Button.defaultProps = {
  bgColor: "green",
  textColor: "black",
  size: "small",
};
