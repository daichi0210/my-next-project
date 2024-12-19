import styles from "./not-found.module.css";

export default function NotFount() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLをサイドご確認ください。
        </dd>
      </dl>
    </div>
  );
}
