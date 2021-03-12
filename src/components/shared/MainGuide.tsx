import type { VFC } from "react";

type Props = { title: string; description: string };

export const MainGuide: VFC<Props> = (props) => {
  return (
    <div className="p-3 mx-auto my-0 md:px-4" style={{ maxWidth: "960px", minWidth: "420px" }}>
      <div className="text-xl font-bold dark:text-white">{props.title}</div>
      <p className="mt-2 text-gray-400">{props.description}</p>
    </div>
  );
};
