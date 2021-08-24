import homepageStyles from "../styles/Homepage.module.css";
import _ from "lodash";

const Grid = ({ photos }) => {
  return (
    <section className={homepageStyles.container}>
      {_.shuffle(photos).map((photo) => (
        <div className={homepageStyles["nodule-of-flint"]}>
          <img className={homepageStyles["nodule-image"]} src={photo.url} />
        </div>
      ))}
    </section>
  );
};

export default Grid;
