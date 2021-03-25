import type { ChangeEvent } from "react";
import { useState } from "react";
import { Button } from "src/components/shared/Button";
import { Input } from "src/components/shared/Input";
import { Validation } from "src/util/Validation";

export const SignupForm = () => {
  const [info, setInfo] = useState({
    creator: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    creator: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    // 追加処理
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center mb-16">
        <h1 className="text-4xl font-bold cursor-default dark:text-white">Share Note</h1>
      </div>
      <div className="mx-auto my-4 w-96">
        <Input
          type="creator"
          name="creator"
          id="creator"
          label="クリエイター名"
          placeholder="クリエイター名を入力"
          value={info.creator}
          onChange={handleChange}
          error={message.creator}
        />
      </div>
      <div className="mx-auto my-4 w-96">
        <Input
          type="email"
          name="email"
          id="email"
          label="メールアドレス"
          placeholder="メールアドレスを入力"
          value={info.email}
          onChange={handleChange}
          error={message.email}
        />
      </div>
      <div className="mx-auto mt-4 w-96">
        <Input
          type="password"
          name="password"
          id="password"
          label="パスワード"
          placeholder="半角英数字をそれぞれ1種類以上含む6文字以上"
          value={info.password}
          onChange={handleChange}
          error={message.password}
        />
      </div>
      <div className="mx-auto mb-4 w-96">
        <Button button id="green" bgColor="transparent" textColor="green" className="text-base hover:underline">
          パスワードを表示する
        </Button>
      </div>
      <Button
        button
        id="loginButton"
        className="mx-auto my-4 w-96"
        disabled={!canSubmit}
        // eslint-disable-next-line react/jsx-handler-names
        onClick={submit}
      >
        登録
      </Button>
    </div>
  );
};
