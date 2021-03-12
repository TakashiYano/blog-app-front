import Head from "next/head";
import { Layout } from "src/components/separate/Layout";
import { Button } from "src/components/shared/Button";
import { HeaderNavigation } from "src/components/shared/HeaderNavigation";
import { MainDivider } from "src/components/shared/MainDivider";
import { MainGuide } from "src/components/shared/MainGuide";

const Home = () => {
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
          <Button
            className="px-5 py-2 font-bold"
            variant="outline"
            button
            onClick={() => {
              window.alert("Hello, World!");
            }}
          >
            Button
          </Button>
        </div>
      </div>
      <MainDivider />
      <div className="px-5 py-14">
        <MainGuide title="Featured" description="おすすめ記事を見つけよう！" />
      </div>
    </Layout>
  );
};

export default Home;
