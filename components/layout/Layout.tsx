import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TopBar from '../navbar/TopBar';

export default function DashLayout({ children }) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Powered by next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
