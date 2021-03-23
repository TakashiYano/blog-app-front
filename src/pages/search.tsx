import type { NextPage } from "next";
import Head from "next/head";
import { SearchIcon } from "src/components/icon/Search";
import { Layout } from "src/components/separate/Layout";
import { Button } from "src/components/shared/Button";
import { Card } from "src/components/shared/Card";
import { Input } from "src/components/shared/Input";

const Search: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-14">
        <div className="px-5 mx-auto my-0 md:px-10" style={{ maxWidth: "960px", minWidth: "420px" }}>
          <form className="flex justify-center">
            <Input id="search" placeholder="キーワードを入力" />
            <Button button id="searchButton" bgColor="transparent" textColor="green" className="ml-2">
              <SearchIcon />
            </Button>
          </form>
          <div className="mt-8">
            <h1 className="text-xl font-bold dark:text-white">人気のトピック</h1>
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
