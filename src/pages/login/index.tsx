import Head from "next/head";
import { Layout } from "src/components/separate/Layout";
import { Button } from "src/components/shared/Button";
import { ListButton } from "src/components/shared/ListButton";

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

          <ListButton
            linkProps={{ href: "/login/email" }}
            variant="link"
            className="mt-5 text-green-500 border-green-500 hover:bg-green-100 focus:ring-green-300"
          >
            メールアドレスでログイン
          </ListButton>

          <ListButton
            button
            variant="link"
            className="mt-5 text-blue-500 border-blue-500 hover:bg-blue-100 focus:ring-blue-300"
            onClick={() => {
              alert("Twitter");
            }}
          >
            Twitterでログイン
          </ListButton>

          <ListButton
            button
            variant="link"
            className="mt-5 text-red-500 border-red-500 hover:bg-red-100 focus:ring-red-300"
            onClick={() => {
              alert("Google");
            }}
          >
            Sign in with Google
          </ListButton>

          <p className="mt-5 text-xs dark:text-white">
            サインインすることにより、当社の
            <Button linkProps={{ href: "/terms" }} variant="link">
              利用規約
            </Button>
            および
            <Button linkProps={{ href: "/privacy" }} variant="link">
              プライバシー規約
            </Button>
            に同意したとみなされます。
          </p>

          <div className="mt-8 text-center">
            <Button linkProps={{ href: "/" }} className="text-sm dark:text-green-500" variant="link">
              新規登録はこちら
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LogInPage;
