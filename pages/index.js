import Head from "next/head";
import Link from "next/link";
import landingStyles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <section className={landingStyles.container}>
      <Head>
        <title>Nodules of Flint</title>
        <meta
          name="keywords"
          content="Brighton, Beach, Nodules of Flint"
        ></meta>
      </Head>
      <a href="/homepage" aria-label="Visit the Nodules of Flint homepage">
        <img
          className={landingStyles.animation}
          src="/nodules-of-flint-animation.gif"
          alt="animation showing various flint rocks"
        />
      </a>
      <div className={landingStyles.enter}>
        <Link href="/homepage">Enter</Link>
      </div>
    </section>
  );
}
