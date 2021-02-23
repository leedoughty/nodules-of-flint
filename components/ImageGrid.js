import homepageStyles from "../styles/Homepage.module.css";
import _ from "lodash";

const Grid = () => {
  const numberOfNodules = 90;
  const randomisedNodulesArray = _.shuffle([...Array(numberOfNodules).keys()]);

  return (
    <section className={homepageStyles.container}>
      {randomisedNodulesArray.map((number, i) => {
        return (
          <div className={homepageStyles["nodule-of-flint"]} key={i}>
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
