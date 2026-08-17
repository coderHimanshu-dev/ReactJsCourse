import { FaStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
const Card = () => {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="shoe"
        className="card-img"
      />
      <div className="product-details">
        <h3 className="card-title">Shoe</h3>
        <section className="card-reviews">
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <span className="total-reviews">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$300</del> 200
          </div>
          <div className="bag">
            <IoBag className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
