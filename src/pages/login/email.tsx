import Head from "next/head";
import { Layout } from "src/components/separate/Layout";
import { LoginForm } from "src/components/separate/LoginForm";

const Email = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-14">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Email;
