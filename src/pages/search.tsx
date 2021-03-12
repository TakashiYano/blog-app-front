import Head from "next/head";
import { Layout } from "src/components/separate/Layout";
import { Button } from "src/components/shared/Button";
import { Card } from "src/components/shared/Card";
import { Input } from "src/components/shared/Input";

const Search = () => {
  return (
    <Layout>
      <Head>
        <title>検索</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-14">
        <div className="px-5 mx-auto my-0 md:px-10" style={{ maxWidth: "960px", minWidth: "420px" }}>
          <form className="flex justify-center">
            <Input id="search" placeholder="キーワードを入力" />
            <Button
              button
              coloredTextDefault
              onClick={() => {
                alert("Hello World!");
              }}
            >
              <svg viewBox="0 0 27 27" fill="currentColor" stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.56 3.43a8.26 8.26 0 000 16.52 8.18 8.18 0 005-1.72l4.7 4.7a1.1 1.1 0 001.56 0 1.09 1.09 0 000-1.55l-4.7-4.7a8.18 8.18 0 001.72-5 8.28 8.28 0 00-8.28-8.25zm0 2.2a6.06 6.06 0 11-6.06 6.06 6 6 0 016.06-6.06z"
                />
              </svg>
            </Button>
          </form>
          <div className="mt-8">
            <h2 className="text-xl font-bold dark:text-white">人気のトピック</h2>
            <div className="mt-5">
              <div className="grid grid-flow-row grid-cols-4 grid-rows-4 gap-4">
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36 md:h-44">
                  hoge
                </Card>
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36 md:h-44">
                  hoge
                </Card>
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36md:h-44">
                  hoge
                </Card>
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36 md:h-44">
                  hoge
                </Card>
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36 md:h-44">
                  hoge
                </Card>
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36 md:h-44">
                  hoge
                </Card>
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36 md:h-44">
                  hoge
                </Card>
                <Card linkProps={{ href: "/" }} variant="solid" className="h-36 md:h-44">
                  hoge
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
