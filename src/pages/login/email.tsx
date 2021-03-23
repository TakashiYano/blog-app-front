import type { NextPage } from "next";
import Head from "next/head";
import { ChevronLeft } from "src/components/icon/ChevronLeft";
import { LoginForm } from "src/components/separate/LoginForm";
import { Button } from "src/components/shared/Button";

const Email: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EmailLogin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen bg-gray-200 dark:bg-gray-700">
        <Button button id="backButton" bgColor="transparent" className="absolute left-2">
          <ChevronLeft />
        </Button>
        <LoginForm />
      </div>
    </div>
  );
};

export default Email;
