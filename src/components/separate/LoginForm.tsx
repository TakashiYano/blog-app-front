import * as React from "react";
import { Button } from "src/components/shared/Button";
import { Input } from "src/components/shared/Input";
import { ListButton } from "src/components/shared/ListButton";
import { Validation } from "src/util/Validation";

export const LoginForm = () => {
  const [info, setInfo] = React.useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [key]: value,
    });
    setMessage({
      ...message,
      [key]: Validation.formValidate(key, value),
    });
  };

  const canSubmit = (): boolean => {
    const validInfo =
      Object.values(info).filter((value) => {
        return value === "";
      }).length === 0;
    const validMessage =
      Object.values(message).filter((value) => {
        return value !== "";
      }).length === 0;
    return validInfo || validMessage || !loading;
  };

  const submit = () => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <div
      className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10"
      style={{ maxWidth: "960px", minWidth: "420px" }}
    >
      <p className="text-base text-center dark:text-white">
        メールアドレスとパスワードを
        <br />
        入力してください。
      </p>
      <div className="mt-5">
        <Input
          id="email"
          label="メールアドレス"
          placeholder="メールアドレスを入力"
          value={info.email}
          onChange={handleChange}
          error={message.email}
        />
      </div>
      <div className="mt-4">
        <Input
          id="password"
          label="パスワード"
          placeholder="半角英数字をそれぞれ1種類以上含む6文字以上"
          value={info.password}
          onChange={handleChange}
          error={message.password}
        />
      </div>
      <Button
        button
        variant="link"
        className="mt-2 ml-4 text-base"
        onClick={() => {
          alert("Hello World!");
        }}
      >
        パスワードを表示する
      </Button>
      <ListButton
        button
        variant="link"
        className="mt-5 text-white bg-green-500 border-none hover:bg-green-600 focus:outline-none focus:ring-2 focus:bg-green-600 focus:ring-green-400"
        disable={!canSubmit}
        onClick={submit}
      >
        ログイン
      </ListButton>
      <div className="text-center">
        <Button linkProps={{ href: "/" }} variant="link" className="mt-8">
          パスワードを忘れた方はこちら
        </Button>
      </div>
    </div>
  );
};
