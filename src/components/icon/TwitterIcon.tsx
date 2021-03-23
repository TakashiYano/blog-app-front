import cc from "classcat";
import type { VFC } from "react";

type Props = {
  className?: string;
  size?: "large" | "small";
};

export const TwitterIcon: VFC<Props> = (props) => {
  return (
    <svg
      className={cc([
        props.className,
        {
          "w-8 h-8": props.size === "large",
          "w-6 h-6": props.size === "small",
        },
      ])}
      viewBox="328 355 335 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z"
        fill="#3BA9EE"
      />
    </svg>
  );
};

// Propsのデフォルト値
TwitterIcon.defaultProps = {
  className: "",
  size: "small",
};
