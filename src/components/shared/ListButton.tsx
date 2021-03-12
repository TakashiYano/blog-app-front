import cc from "classcat";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { DOMAttributes, ReactNode, VFC } from "react";
import React from "react";

type Common = {
  children: ReactNode;
  variant: "primary" | "caution" | "link";
  className?: string;
  disable?: boolean;
};

type Button = Common & {
  button: boolean;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

type Link = Common & { linkProps: LinkProps; external?: boolean };

const isButton = (props: Button | Link): props is Button => {
  return "button" in props;
};

export const ListButton: VFC<Button | Link> = (props) => {
  const className = cc([
    props.className,
    "w-full flex items-center text-sm px-4 md:px-6 h-9",
    {
      "hover:bg-green-50": props.variant === "primary",
      "text-pink-600 hover:bg-pink-50": props.variant === "caution",
      "border focus:outline-none focus:ring-2 justify-center font-bold rounded-full": props.variant === "link",
    },
  ]);

  if (props.disable) {
    return (
      <button type="button" className={className} disabled={props.disable}>
        {props.children}
      </button>
    );
  }

  return isButton(props) ? (
    <button type="button" onClick={props.onClick} className={className}>
      {props.children}
    </button>
  ) : (
    <Link {...props.linkProps}>
      <a
        className={className}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {props.children}
      </a>
    </Link>
  );
};
