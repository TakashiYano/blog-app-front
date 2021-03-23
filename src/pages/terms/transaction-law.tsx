import type { NextPage } from "next";
import { Layout } from "src/components/separate/Layout";

const Commerce: NextPage = () => {
  return (
    <Layout>
      <div className="px-5 py-14">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10 prose prose-md prose-green dark:text-gray-400"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h1 className="dark:text-white">特定商取引法に基づく表記</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione recusandae mollitia reiciendis omnis
            nulla? Commodi a molestias ducimus eum praesentium dolorum modi impedit, neque, totam quo amet eius
            provident! Molestiae!
          </p>
          <h2 className="dark:text-white">事業者</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">事業者の所在</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">サイト管理代表者</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">お問合せ先</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">個人情報の取扱いについて</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">コンテンツの閲覧保証ブラウザ</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">その他</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Commerce;
