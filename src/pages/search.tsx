import Head from "next/head";
import { SearchIcon } from "src/components/icon/SearchIcon";
import { Layout } from "src/components/separate/Layout";
import { Card } from "src/components/shared/Card";
import { Input } from "src/components/shared/Input";
import { PrimaryButton } from "src/components/shared/PrimaryButton";

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
            <PrimaryButton button coloredTextDefault>
              <SearchIcon size="small" />
            </PrimaryButton>
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
