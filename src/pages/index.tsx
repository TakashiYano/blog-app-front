import Head from "next/head";
import { Layout } from "src/components/separate/Layout";
import { HeaderNavigation } from "src/components/shared/HeaderNavigation";
import { MainDivider } from "src/components/shared/MainDivider";
import { MainGuide } from "src/components/shared/MainGuide";
import { PrimaryButton } from "src/components/shared/PrimaryButton";
import type { User, UserPutRequest } from "src/models/user";
import useSWR from "swr";

const Home = () => {
  const { data, error } = useSWR<User>("/users/var");

  const handleClick = async () => {
    const req: UserPutRequest = { id: "var", name: "user1" };
    // eslint-disable-next-line no-console
    console.log({ ブラウザから送るリクエスト: req });
    const res = await fetch("/users/var", {
      method: "put",
      body: JSON.stringify(req),
    });
    const json = await res.json();
    // eslint-disable-next-line no-console
    console.log({ サーバーから受け取ったレスポンス: json });
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavigation />
      <div className="px-5 py-14">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h2 className="dark:text-white">Home</h2>
          <PrimaryButton className="px-5 py-2 font-bold" variant="outline" button onClick={handleClick}>
            Button
          </PrimaryButton>
        </div>
      </div>
      <MainDivider />
      <div className="px-5 py-14">
        <div className="mx-auto my-0" style={{ maxWidth: "960px", minWidth: "420px" }}>
          <MainGuide title="Featured" description="おすすめユーザーを見つけよう！" />
          <div className="mt-4 dark:text-white">
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

export default Home;
