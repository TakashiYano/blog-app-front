import Head from "next/head";
import { Dropdown } from "src/components/separate/Dropdown";
import { Layout } from "src/components/separate/Layout";
import { HeaderNavigation } from "src/components/shared/HeaderNavigation";
import { MainDivider } from "src/components/shared/MainDivider";
import { MainGuide } from "src/components/shared/MainGuide";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavigation />
      <div className="px-5 py-14">
        <div
          className="flex items-center justify-between px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h2 className="dark:text-white">About</h2>
          <div>
            <Dropdown label="Options" />
          </div>
        </div>
      </div>
      <MainDivider thin />
      <div className="px-5 py-14">
        <MainGuide title="Featured" description="おすすめ記事を見つけよう！" />
      </div>
    </Layout>
  );
};

export default About;
