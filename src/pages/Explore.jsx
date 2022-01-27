import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Pasar Rumah</p>
      </header>
      <main>
        <Slider />
        <p className="exploreCategoryHeading">Kategori</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Rumah disewakan</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sale"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Rumah dijual</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
