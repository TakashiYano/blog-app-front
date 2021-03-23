/* eslint-disable no-console */
import type { NextPage } from "next";
import { HeaderNavigation } from "src/components/separate/HeaderNavigation";
import { Layout } from "src/components/separate/Layout";
import { MainDivider } from "src/components/shared/MainDivider";
import { MainGuide } from "src/components/shared/MainGuide";
import type { User, UserPutRequest } from "src/models/user";
import useSWR from "swr";

const Async: NextPage = () => {
  const { data, error } = useSWR<User>("/users/var");

  const handleClick = async () => {
    const req: UserPutRequest = { id: "var", name: "user1" };
    console.log({ ブラウザから送るリクエスト: req });
    const res = await fetch("/users/var", {
      method: "put",
      body: JSON.stringify(req),
    });
    const json = await res.json();
    console.log({ サーバーから受け取ったレスポンス: json });
  };

  return (
    <Layout>
      <HeaderNavigation />
      <div className="px-5 py-14">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h1 className="text-2xl font-bold dark:text-white">非同期の叩き方テスト</h1>
          <button className="text-gray-400" onClick={handleClick}>
            クリックでfetch(logに出力)
          </button>
        </div>
      </div>
      <MainDivider />
      <div className="px-5 py-14">
        <div className="mx-auto my-0" style={{ maxWidth: "960px", minWidth: "420px" }}>
          <MainGuide title="Featured" description="おすすめユーザーを見つけよう！" />
          <div className="px-5 mt-4 dark:text-white">
            {error ? <div>failed to load</div> : null}
            {data ? (
              <div>
                <img src={data.profileImage} alt={data.name} width={80} height={80} />
                <h2>{data.name}</h2>
              </div>
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Async;
