import Head from "next/head";
import styles from "../../styles/Home.module.css";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("../../components/navbar/TopBar"), {
  ssr: false,
});

export default function DashLayout({ children }) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Powered by next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
