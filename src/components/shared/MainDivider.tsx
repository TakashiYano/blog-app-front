import type { VFC } from "react";

type Props = { thin?: boolean };

export const MainDivider: VFC<Props> = (props) => {
  return (
    <hr
      className={
        props.thin
          ? "border-t border-gray-300 dark:border-gray-500"
          : "h-3 border-t border-b border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-gray-800"
      }
    />
  );
};
