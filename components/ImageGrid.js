import homepageStyles from "../styles/Homepage.module.css";
import Image from "next/image";

const Grid = () => {
  const numberOfNodules = 20;

  return (
    <section className={homepageStyles.container}>
      {[...Array(numberOfNodules)].map((_, i) => {
        return (
          <div className={homepageStyles["nodule-of-flint"]} key={i}>
            <Image
              alt="A nodule of flint"
              src={`/nodules-of-flint/nodule-${i}.jpg`}
              width={250}
              height={250}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Grid;
