import styles from "../styles/PriceCard.module.css";

const PriceCard = ({ title, price, caption, desc1, desc2, desc3, btn }) => {
  return (
    <div className={`card py-5 ${styles.card}`}>
      <div className={`card-body ${styles["card-body"]}`}>
        <div className="text-center">
          <h2 className="fw-bold purple ">{title}</h2>
          <h1 className={styles.h1}>
            <span className={`fw-bold ${styles.span}`}>$</span>
            {price}
            <span className={`month fw-bold ${styles.span}`}>/Month</span>
          </h1>
        </div>
        <h6 className="text-center text-muted">{caption}</h6>
        <ul className={`m-2 p-2 ${styles.ul} text-center`}>
          <li className={styles.li}>
            <i className="fa fa-check purple" /> {desc1}
          </li>
          <li className={styles.li}>
            <i className="fa fa-check purple" /> {desc2}
          </li>
          <li className={`purple ${styles.li}`}>
            <i className="fa fa-check purple" /> {desc3}
          </li>
        </ul>
        <div className="text-center">
          <button
            type="button"
            className={`btn btn-custom purple ${styles.btn} ${styles["btn-custom"]}`}
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
