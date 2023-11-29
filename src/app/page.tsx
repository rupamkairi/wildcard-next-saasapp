import { headers } from "next/headers";
import styles from "../../styles/Home.module.css";

async function getData() {
  const subdomain = headers().get("subdomain")?.split(".")[0];
  return { subdomain };
}

export default async function RootPage() {
  const data = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextjs.org">{data.subdomain || "Next.js"}</a>
        </h1>
      </div>
    </div>
  );
}
