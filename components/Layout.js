import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NextDex</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Pokédex made with PokeAPI using Nextjs"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main className="mainContainer">
        <div className="mainContent">{children}</div>
      </main>
      <Footer />
    </>
  );
}
