import cc from "classcat";
import type { InputHTMLAttributes, VFC } from "react";
import TextareaAutosize from "react-textarea-autosize";

type Common = {
  id: string;
  label?: string;
  addon?: string;
  error?: string;
  value?: string;
  placeholder?: string;
  textarea?: boolean;
};

type Input = Common & {
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
};

export const Input: VFC<Input> = (props) => {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-400">
        {props.label}
      </label>
      <div className="flex mt-0.5 rounded-md shadow-sm">
        {props.addon ? (
          <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md sm:text-sm">
            {props.addon}
          </span>
        ) : null}
        {props.textarea ? (
          <TextareaAutosize
            id={props.id}
            name={props.id}
            minRows={3}
            placeholder={props.placeholder}
            className="block w-full py-2 pl-3 mt-1 border border-gray-300 resize-none shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:bg-gray-200"
          />
        ) : (
          <input
            type="text"
            id={props.id}
            name={props.id}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className={cc([
              "focus:ring-green-500 focus:border-green-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border focus:ring-1 pl-3 py-2 focus:outline-none dark:bg-gray-200",
              { "rounded-l-md": !props.addon },
            ])}
          />
        )}
      </div>
      {props.error ? (
        <p className="mt-1 text-sm text-pink-600" id="email-error">
          {props.error}
        </p>
      ) : null}
    </div>
  );
};
