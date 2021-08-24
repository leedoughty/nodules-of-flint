import Head from "next/head";
import ImageGrid from "../components/ImageGrid";
import Nav from "../components/Nav";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/album/1/photos");
  const photos = await response.json();

  return {
    props: {
      photos,
    },
  };
};

export default function Homepage({ photos }) {
  return (
    <>
      <Head>
        <title>Nodules of Flint</title>
        <meta name="keywords" content="Brighton, Beach, Nodules of Flint"></meta>
      </Head>
      <Nav />
      <ImageGrid photos={photos} />
    </>
  );
}
