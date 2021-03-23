import type { NextPage } from "next";
import { useState } from "react";
import { Dropdown } from "src/components/separate/Dropdown";
import { HeaderNavigation } from "src/components/separate/HeaderNavigation";
import { Layout } from "src/components/separate/Layout";
import { Button } from "src/components/shared/Button";

const ButtonPage: NextPage = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount((preCount) => {
      return preCount + 1;
    });
  };

  return (
    <Layout>
      <HeaderNavigation />
      <div className="px-5 py-8">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold dark:text-white">使い回せるボタンのコンポーネント</h1>
            <div>
              <Dropdown label="User" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="my-4 ml-4">
              <span className="m-auto text-gray-400">ボタンクリック テスト用のカウント：{count}</span>
            </div>
            <div className="flex flex-row justify-start flex-none">
              <div className="mx-auto">
                <Button button id="blue" bgColor="blue" onClick={handleAddCount}>
                  メモを書く
                </Button>
              </div>
              <div className="mx-auto">
                <Button button id="blue" bgColor="blue" onClick={handleAddCount} disabled>
                  メモを書く
                </Button>
              </div>
              <div className="mx-auto">
                <Button button id="orange" bgColor="orange" className="w-auto" onClick={handleAddCount}>
                  公開中
                </Button>
              </div>
              <div className="mx-auto">
                <Button button id="orange" bgColor="orange" className="w-auto" onClick={handleAddCount} disabled>
                  公開中
                </Button>
              </div>
              <div className="mx-auto">
                <Button button id="gray" bgColor="gray" onClick={handleAddCount}>
                  キャンセル
                </Button>
              </div>
              <div className="mx-auto">
                <Button button id="disabled" bgColor="blue" onClick={handleAddCount} disabled>
                  キャンセル
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="mx-auto">
                <Button button id="red" bgColor="red" className="w-32" onClick={handleAddCount}>
                  削除する
                </Button>
              </div>
              <div className="mx-auto">
                <Button button id="red" bgColor="red" className="w-32" onClick={handleAddCount} disabled>
                  削除する
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ButtonPage;
