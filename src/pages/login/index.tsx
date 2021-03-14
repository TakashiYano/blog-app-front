import Head from "next/head";
import { EmailIcon } from "src/components/icon/EmailIcon";
import { GoogleIcon } from "src/components/icon/GoogleIcon";
import { TwitterIcon } from "src/components/icon/TwitterIcon";
import { Layout } from "src/components/separate/Layout";
import { Button } from "src/components/shared/Button";
import { PrimaryButton } from "src/components/shared/PrimaryButton";

const LogInPage = () => {
  return (
    <Layout>
      <Head>
        <title>ログイン</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-14">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 md:px-10 dark:border-gray-500 rounded-md dark:bg-gray-800"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h1 className="text-xl font-bold dark:text-white">Logoにログイン</h1>

          <Button id="emailButton" linkProps={{ href: "/login/email" }} color="green">
            <EmailIcon size="small" />
            メールアドレスでログイン
          </Button>

          <Button id="twitterButton" button color="blue">
            <TwitterIcon size="small" />
            Twitterでログイン
          </Button>

          <Button id="googleButton" button color="red">
            <GoogleIcon size="small" />
            Sign in with Google
          </Button>

          <p className="mt-5 text-xs dark:text-white">
            サインインすることにより、当社の
            <PrimaryButton linkProps={{ href: "/terms" }} variant="link">
              利用規約
            </PrimaryButton>
            および
            <PrimaryButton linkProps={{ href: "/privacy" }} variant="link">
              プライバシー規約
            </PrimaryButton>
            に同意したとみなされます。
          </p>

          <div className="mt-8 text-center">
            <PrimaryButton linkProps={{ href: "/" }} className="text-sm dark:text-green-500" variant="link">
              新規登録はこちら
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LogInPage;
