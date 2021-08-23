import homepageStyles from "../styles/Homepage.module.css";
import _ from "lodash";

const Grid = () => {
  const numberOfNodules = 90;

  return (
    <section className={homepageStyles.container}>
      {_.shuffle([...Array(numberOfNodules).keys()]).map((number, i) => {
        return (
          <div
            className={homepageStyles["nodule-of-flint"]}
            key={i}
            style={{ border: "1px solid white" }}
          >
            <img
              className={homepageStyles["nodule-image"]}
              alt="A nodule of flint"
              src={`/nodules-of-flint/nodule-${number}.jpg`}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Grid;
