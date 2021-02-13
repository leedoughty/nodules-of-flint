import Head from "next/head";
import ImageGrid from "../components/ImageGrid";

const homepage = () => {
  return (
    <div>
      <Head>
        <title>Nodules of Flint</title>
      </Head>
      <ImageGrid />
    </div>
  );
};

export default homepage;
