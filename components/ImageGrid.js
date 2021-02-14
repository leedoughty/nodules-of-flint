import homepageStyles from "../styles/Homepage.module.css";

const Grid = () => {
  const numberOfNodules = 74;

  return (
    <section className={homepageStyles.container}>
      {[...Array(numberOfNodules)].map((_, i) => {
        return (
          <div className={homepageStyles["nodule-of-flint"]} key={i}>
            <img
              className={homepageStyles["nodule-image"]}
              alt="A nodule of flint"
              src={`/nodules-of-flint/nodule-${i}.jpg`}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Grid;
