import React,{useState} from 'react'
import './Products.css'
import { FaFilter } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Filter = () => {
    const [arrowCategory, setArrowCategory] = useState("divArrowCategory");
    const [arrowBrand, setArrowBrand] = useState("divArrowBrand");
    const [arrowPrice, setArrowPrice] = useState("divArrowPrice");
    const [arrowRating, setArrowRating] = useState("divArrowRating");
    const [arrowAvailability, setArrowAvailability] = useState(
      "divArrowAvailability"
    );
    const [showCategory, setShowCategory] = useState("products");
    const [showBrand, setShowBrand] = useState("products");
    const [showPrice, setShowPrice] = useState("products");
    const [showRating, setShowRating] = useState("products");
    const [showAvailability, setShowAvailability] = useState("products");
    const changeArrowCategoryhandler = (e) => {
      if (arrowCategory === "divArrowCategory") {
        setArrowCategory("setDivArrowCategory");
        setShowCategory("productsNone");
      }
      if (arrowCategory === "setDivArrowCategory") {
        setArrowCategory("divArrowCategory");
        setShowCategory("products");
      }
    };
    const changeArrowBrandhandler = (e) => {
      console.log(e.target.name);
      if (arrowBrand === "divArrowBrand") {
        setArrowBrand("setDivArrowBrand");
        setShowBrand("productsNone");
      }
      if (arrowBrand === "setDivArrowBrand") {
        setArrowBrand("divArrowBrand");
        setShowBrand("products");
      }
    };
    const changeArrowPricehandler = (e) => {
      console.log(e.target.name);
      if (arrowPrice === "divArrowPrice") {
        setArrowPrice("setDivArrowPrice");
        setShowPrice("productsNone");
      }
      if (arrowPrice === "setDivArrowPrice") {
        setArrowPrice("divArrowPrice");
        setShowPrice("products");
      }
    };
  
    const changeArrowAvailabilityhandler = (e) => {
      console.log(e.target.name);
      if (arrowAvailability === "divArrowAvailability") {
        setArrowAvailability("setDivArrowAvailability");
        setShowAvailability("productsNone");
      }
      if (arrowAvailability === "setDivArrowAvailability") {
        setArrowAvailability("divArrowAvailability");
        setShowAvailability("products");
      }
    };
    const changeArrowRatinghandler = (e) => {
      console.log(e.target.name);
      if (arrowRating === "divArrowRating") {
        setArrowRating("setDivArrowRating");
        setShowRating("productsNone");
      }
      if (arrowRating === "setDivArrowRating") {
        setArrowRating("divArrowRating");
        setShowRating("products");
      }
    };
  
  return (
    <div className="filterMainDiv">
        <div className="category">
          <FaFilter className="filterSymbol"></FaFilter>

          <div className="filterName">Filters</div>
          {/* <div className="clearFilters">clearAll</div> */}
        </div>
        <div className="category">
          <div className="categoryName">category</div>
          <div
            className={arrowCategory}
            onClick={changeArrowCategoryhandler}
          ></div>
        </div>
        <div className={showCategory}>
          <input
            className="inputRadio"
            type="radio"
            name="category"
            id="1"
          ></input>
          <label>Laptops</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="category"
            id="2"
          ></input>
          <label>Mobiles</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="category"
            id="3"
          ></input>
          <label>Smart Tvs</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="category"
            id="4"
          ></input>
          <label>Smart Watches</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="category"
            id="5"
          ></input>
          <label>Accessories</label>
          <br></br>
        </div>
        <div className="category">
          <div className="categoryName">brand</div>
          <div className={arrowBrand} onClick={changeArrowBrandhandler}></div>
        </div>
        <div className={showBrand}>
          <input
            className="inputRadio"
            type="radio"
            name="brand"
            id="1"
          ></input>
          <label>Samsung</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="brand"
            id="2"
          ></input>
          <label>Acer</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="brand"
            id="3"
          ></input>
          <label>Lenovo</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="brand"
            id="4"
          ></input>
          <label>Dell</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="brand"
            id="5"
          ></input>
          <label>One Plus</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="brand"
            id="6"
          ></input>
          <label>Hp</label>
          <br></br>
        </div>
        <div className="category">
          <div className="categoryName">Price</div>
          <div className={arrowPrice} onClick={changeArrowPricehandler}></div>
        </div>
        <div className={showPrice}>
          <input
            className="inputRadio"
            type="radio"
            name="price"
            id="1"
          ></input>
          <label>₹ 5000 -₹ 10000</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="price"
            id="2"
          ></input>
          <label>₹ 10000 -₹ 30000</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="price"
            id="3"
          ></input>
          <label>₹ 30000 -₹ 80000</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="price"
            id="4"
          ></input>
          <label>₹ 80000 -₹ 100000</label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="price"
            id="5"
          ></input>
          <label>₹ 100000-₹ 200000</label>
          <br></br>
        </div>
        <div className="category">
          <div className="categoryName">Rating</div>
          <div className={arrowRating} onClick={changeArrowRatinghandler}></div>
        </div>
        <div className={showRating}>
          <input
            className="inputRadio"
            type="radio"
            name="rating"
            id="1"
          ></input>
          <label>
            <AiFillStar style={{color:"#008000"}} />
            <AiFillStar style={{color:"#008000"}}/>
            <AiFillStar style={{color:"#008000"}}/>
            <AiFillStar style={{color:"#008000"}}/>
            <AiOutlineStar /> & above
          </label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="rating"
            id="2"
          ></input>
          <label>
            <AiFillStar style={{color:"#008000"}}/>
            <AiFillStar style={{color:"#008000"}}/>
            <AiFillStar style={{color:"#008000"}}/>
            <AiOutlineStar />
            <AiOutlineStar /> & above
          </label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="rating"
            id="4"
          ></input>
          <label>
            <AiFillStar style={{color:"#008000"}}/>
            <AiFillStar style={{color:"#008000"}}/>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar /> & above
          </label>
          <br></br>
          <input
            className="inputRadio"
            type="radio"
            name="rating"
            id="5"
          ></input>
          <label>
            <AiFillStar style={{color:"#008000"}}/>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar /> & above
          </label>
          <br></br>
        </div>
        <div className="category">
          <div className="categoryName">Availability</div>
          <div
            className={arrowAvailability}
            onClick={changeArrowAvailabilityhandler}
          ></div>
        </div>
        <div className={showAvailability}>
          <input
            className="inputRadio"
            type="radio"
            name="availability"
            id="1"
          ></input>
          <label>show in stock only</label>
          <br></br>
        </div>
      </div>
    
  )
}

export default Filter