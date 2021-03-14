import cc from "classcat";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode, VFC } from "react";

type Common = {
  children: ReactNode;
  variant: "solid" | "outline";
  className?: string;
};

type Link = Common & { linkProps: LinkProps; external?: boolean };

export const Card: VFC<Link> = (props) => {
  const className = cc([
    props.className,
    "inline-flex items-center justify-center rounded-xl",
    {
      "border border-gray-300 dark:border-gray-600 dark:text-white bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600":
        props.variant === "solid",
      "border text-green-500 dark:text-gray-800 border-green-500 dark:border-gray-800 hover:bg-green-50 dark:hover:bg-gray-600":
        props.variant === "outline",
    },
  ]);

  return (
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
