import Head from "next/head";
import { Layout } from "src/components/separate/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>プライバシーポリシー</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-14">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10 prose prose-md prose-green dark:text-gray-400"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h1 className="dark:text-white">プライバシーポリシー</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae cum a eius nesciunt nihil dicta
            repellat laudantium, culpa praesentium rerum eum? Aperiam doloremque aliquam officiis, necessitatibus ullam
            totam enim.
          </p>
          <h2 className="dark:text-white">第1条（プライバシー情報の定義）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第2条（プライバシー情報の収集方法）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第3条（個人情報を収集・利用する目的）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第4条（個人情報の第三者提供）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第5条（個人情報の訂正および削除）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第6条（プライバシーポリシーの変更）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第7条（お問い合わせ窓口）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
