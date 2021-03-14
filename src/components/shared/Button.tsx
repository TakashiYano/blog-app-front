import cc from "classcat";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { DOMAttributes, ReactNode, VFC } from "react";

type Common = {
  id: string;
  children: ReactNode;
  color?: "green" | "red" | "blue";
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

export const Button: VFC<Button | Link> = (props) => {
  const className = cc([
    props.className,
    "w-full flex items-center text-sm px-4 md:px-6 h-9 border focus:outline-none focus:ring-2 justify-center font-bold rounded-full mt-5",
    {
      "text-green-500 border-green-500 hover:bg-green-100 focus:ring-green-300": props.color === "green",
      "text-blue-500 border-blue-500 hover:bg-blue-100 focus:ring-blue-300": props.color === "blue",
      "text-red-500 border-red-500 hover:bg-red-100 focus:ring-red-300": props.color === "red",
    },
  ]);

  if (props.disable) {
    return (
      <button type="button" data-testid={props.id} className={className} disabled={props.disable}>
        {props.children}
      </button>
    );
  }

  return isButton(props) ? (
    <button type="button" data-testid={props.id} onClick={props.onClick} className={className}>
      {props.children}
    </button>
  ) : (
    <Link {...props.linkProps}>
      <a
        data-testid={props.id}
        className={className}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {props.children}
      </a>
    </Link>
  );
};
