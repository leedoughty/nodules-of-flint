import Head from "next/head";
import ImageGrid from "../components/ImageGrid";
import Nav from "../components/Nav";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Nodules of Flint</title>
        <meta name="keywords" content="Brighton, Beach, Nodules of Flint"></meta>
      </Head>
      <Nav />
      <ImageGrid />
    </>
  );
}
