import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nodules of Flint</title>
        <meta
          name="keywords"
          content="Brighton, Beach, Nodules of Flint"
        ></meta>
      </Head>
      <h1>Nodules of Flint</h1>
      <Image
        src="/nodules-of-flint-animation.gif"
        alt="animation showing various flint rocks"
        width="500"
        height="500"
      />
    </div>
  );
}
