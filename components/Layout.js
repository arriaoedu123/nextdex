import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NextDex</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mainContainer">
        <div className="mainContent">{children}</div>
      </main>
      <Footer />
    </>
  );
}
