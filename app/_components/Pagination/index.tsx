import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";
import classNames from "classnames";

type Props = {
  totalCount: number;
};

export default function Pagination({ totalCount }: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            <Link href={`/news/p/${p}`} className={styles.item}>
              {p}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
