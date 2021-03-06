import Head from "next/head";
import aboutStyles from "../styles/About.module.css";

const about = () => {
  return (
    <section className={aboutStyles.container}>
      <a tabindex="0" href="/">
        <img className={aboutStyles.arrow} alt="Go back to homepage" src="/arrow.svg" />
      </a>
      <Head>
        <title>About</title>
      </Head>
      <p>
        Nodules of Flint is a project by designer & photographer Paige Scalco, documenting stones
        collected from Brighton Beach.
      </p>
      <p>
        This website is an archive of the collection, aimed to create an accessible platform for
        passers’ by to explore, appreciate and be inspired by their simple beauty.
      </p>
      <p className={aboutStyles.website}>Website built by Lee Doughty, 2021.</p>
    </section>
  );
};

export default about;
