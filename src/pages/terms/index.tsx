import type { NextPage } from "next";
import { Layout } from "src/components/separate/Layout";

const Terms: NextPage = () => {
  return (
    <Layout>
      <div className="px-5 py-14">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10 prose prose-md prose-green dark:text-gray-400"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h1 className="dark:text-white">利用規約</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur eaque accusantium
            vel, nam, quo consequuntur veniam nostrum sed labore illo dolorum distinctio dolor repellendus praesentium
            voluptate laboriosam et?
          </p>
          <h2 className="dark:text-white">第1条（規約の適用）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第2条（利用資格）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第3条（利用者IDおよびパスワードの管理）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第4条（禁止事項）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
          <h2 className="dark:text-white">第5条（本サービスの提供の停止等）</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quaerat, corporis ipsum. Error, fuga aut porro amet
            nequeprovident quibusdam beatae repellendus iure quae consequuntur,illo cumque dolorum nostrum et atque.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
