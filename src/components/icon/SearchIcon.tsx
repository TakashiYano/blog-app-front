import cc from "classcat";
import type { VFC } from "react";

type Props = {
  className?: string;
  size?: "large" | "small";
};

export const SearchIcon: VFC<Props> = (props) => {
  const className = cc([
    props.className,
    {
      "w-8 h-8": props.size === "large",
      "w-6 h-6": props.size === "small",
    },
  ]);

  return (
    <svg
      viewBox="0 0 27 27"
      fill="currentColor"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.56 3.43a8.26 8.26 0 000 16.52 8.18 8.18 0 005-1.72l4.7 4.7a1.1 1.1 0 001.56 0 1.09 1.09 0 000-1.55l-4.7-4.7a8.18 8.18 0 001.72-5 8.28 8.28 0 00-8.28-8.25zm0 2.2a6.06 6.06 0 11-6.06 6.06 6 6 0 016.06-6.06z"
      />
    </svg>
  );
};
