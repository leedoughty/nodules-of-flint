import Head from "next/head";
import ImageGrid from "../components/ImageGrid";
import Nav from "../components/Nav";

const homepage = () => {
  return (
    <>
      <Head>
        <title>Nodules of Flint</title>
      </Head>
      <Nav />
      <ImageGrid />
    </>
  );
};

export default homepage;
