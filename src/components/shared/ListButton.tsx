import cc from "classcat";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { DOMAttributes, ReactNode, VFC } from "react";

type Common = {
  children: ReactNode;
  size?: "large" | "small";
  variant?: "primary" | "caution";
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

export const ListButton: VFC<Button | Link> = (props) => {
  const className = cc([
    props.className,
    "w-full flex items-center text-sm px-4 md:px-6 h-9",
    {
      "text-blue-600 hover:bg-blue-50": props.variant === "primary",
      "text-pink-600 hover:bg-pink-50": props.variant === "caution",
    },
  ]);

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
        className={cc("text-gray-400 bg-gray-300 cursor-not-allowed w-full flex items-center text-sm px-4 md:px-6 h-9")}
        disabled={props.disabled}
      >
        {props.startIcon ? <span className={iconClassName}>{props.startIcon}</span> : null}
        <span>{props.children}</span>
        {props.endIcon ? <span className={iconClassName}>{props.endIcon}</span> : null}
      </button>
    );
  }

  return isButton(props) ? (
    <button type="button" onClick={props.onClick} className={className}>
      {props.startIcon ? <span className={iconClassName}>{props.startIcon}</span> : null}
      <span>{props.children}</span>
      {props.endIcon ? <span className={iconClassName}>{props.endIcon}</span> : null}
    </button>
  ) : (
    <Link {...props.linkProps}>
      <a
        className={className}
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
ListButton.defaultProps = {
  variant: "primary",
  size: "small",
};
