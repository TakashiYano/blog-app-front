import Link from "next/link";
import { Button } from "src/components/shared/Button";

const items = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms/transaction-law", label: "特定商取引法に基づく表記" },
  { href: "/", label: "お問い合わせ" },
];

export const Footer = () => {
  return (
    <footer className="py-10 bg-white border-t border-gray-300 dark:border-gray-500 dark:bg-gray-800">
      <div className="px-5 mx-auto my-0 md:px-10" style={{ maxWidth: "1200px", minWidth: "420px" }}>
        <Button
          linkProps={{ href: "/" }}
          id="black"
          bgColor="transparent"
          textColor="black"
          size="vertical"
          className="text-3xl"
        >
          Share Note
        </Button>
        <ul>
          {items.map(({ href, label }) => {
            return (
              <li key={label} className="mt-4 text-gray-400">
                {label === "お問い合わせ" ? (
                  <Link href={href}>
                    <a target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {label}
                    </a>
                  </Link>
                ) : (
                  <Link href={href}>
                    <a className="hover:underline">{label}</a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-6">
          <small className="dark:text-white" lang="en">
            copyright ShareNote All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};
