import type { NextPage } from "next";
import Link from "next/link";
import { HeaderNavigation } from "src/components/separate/HeaderNavigation";
import { Layout } from "src/components/separate/Layout";

const PAGES = [
  { href: "/login", label: "ログインページ", isDone: true },
  { href: "/signup", label: "新規登録ページ", isDone: false },
  { href: "/registration", label: "初回プロフィール登録ページ", isDone: false },
  { href: "/user/foo", label: "ユーザーページ", isDone: false },
  { href: "/search", label: "投稿検索ページ", isDone: true },
  { href: "/post/foo", label: "投稿ページ", isDone: false },
  { href: "/settings", label: "設定一覧ページ", isDone: false },
  { href: "/settings/profile", label: "プロフィール変更ページ", isDone: false },
  { href: "/settings/account", label: "SNS連携ページ", isDone: false },
  { href: "/settings/notification", label: "通知設定ページ", isDone: false },
  { href: "/terms", label: "利用規約ページ", isDone: true },
  { href: "/terms/transaction-law", label: "特定商取引法ページ", isDone: true },
  { href: "/privacy", label: "プライバシーポリシーページ", isDone: true },
] as const;

const Index: NextPage = () => {
  return (
    <Layout>
      <HeaderNavigation />
      <div className="px-5 py-14">
        <div
          className="px-5 py-8 mx-auto my-0 bg-white border border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-800 md:px-10"
          style={{ maxWidth: "960px", minWidth: "420px" }}
        >
          <h1 className="text-2xl font-bold dark:text-white">ページ一覧</h1>
          <ul className="mt-2 grid gap-4 grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PAGES.map((page) => {
              return (
                <li key={page.href}>
                  <Link href={page.href}>
                    <a className="block p-3 border border-gray-300 dark:text-white dark:border-gray-500">{`${
                      page.isDone ? "✅ " : ""
                    }${page.label}`}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
