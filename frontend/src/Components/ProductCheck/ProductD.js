import React, { useState, useEffect } from "react";
import { productActions } from "../../Actions/Product";
import { useDispatch, useSelector } from "react-redux";
const ProductD = () => {
  const { loading, products } = useSelector((state) => state.product);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([]);
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();

  const onChangeCategoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    console.log(typeof value);
    setCategory(value);
  };
  console.log(category);

  const onChangePriceHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    const lower = value.split(",")[0];
    const higher = value.split(",")[1];
    const price = [Number(lower), Number(higher)];
    setPrice(price);
  };
  console.log(price);

  const onChangeBrandHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setBrand(value)
  };

  useEffect(() => {
    dispatch(productActions("", 1, price, category, 0));
  }, [dispatch, price, category]);

  return (
    <div>
      <div className="category">
        <label>laptop</label>
        <input
          type="checkbox"
          name="Laptop"
          value="Laptop"
          onChange={onChangeCategoryHandler}
        ></input>
        <label>mobile</label>
        <input
          type="checkbox"
          name="Phone"
          value="Phone"
          onChange={onChangeCategoryHandler}
        ></input>
        <label>tv</label>
        <input
          type="checkbox"
          name="smart tv"
          value="smart tv"
          onChange={onChangeCategoryHandler}
        ></input>
        <label>smart watch</label>
        <input
          type="checkbox"
          name="Watch"
          value="Watch"
          onChange={onChangeCategoryHandler}
        ></input>
      </div>
      <div className="price">
        <input
          type="radio"
          id="1"
          name="1"
          value="2501,5000"
          onChange={onChangePriceHandler}
        ></input>
        <label htmlFor="1">₹2501-₹5000</label>
        <br></br>
        <input
          type="radio"
          id="2"
          name="1"
          value="5001,10000"
          onChange={onChangePriceHandler}
        ></input>
        <label htmlFor="1">₹5001-₹10000</label>
        <br></br>
        <input
          type="radio"
          id="3"
          name="1"
          value="10001,20000"
          onChange={onChangePriceHandler}
        ></input>
        <label htmlFor="1">₹10001 - ₹20000</label>
        <br></br>
        <input
          type="radio"
          id="4"
          name="1"
          value="20001,30000"
          onChange={onChangePriceHandler}
        ></input>
        <label htmlFor="1">₹20001 - ₹30000</label>
        <br></br>
        <input
          type="radio"
          id="5"
          name="1"
          value="30001,50000"
          onChange={onChangePriceHandler}
        ></input>
        <label htmlFor="1">₹30001 - ₹50000</label>
        <br></br>
        <input
          type="radio"
          id="6"
          name="1"
          value="50001,100000"
          onChange={onChangePriceHandler}
        ></input>
        <label htmlFor="1">₹50001 - ₹100000</label>
      </div>
      <div className="brand">
        <label>Samsung</label>
        <input
          type="checkbox"
          value="Samsung"
          name="Samsung"
          onChange={onChangeBrandHandler}
        ></input>
        <label>Huawei</label>
        <input
          type="checkbox"
          value="Huawei"
          onChange={onChangeBrandHandler}
        ></input>
        <label>Lg</label>
        <input
          type="checkbox"
          value="Lg"
          onChange={onChangeBrandHandler}
        ></input>
        <label>Sony</label>
        <input
          type="checkbox"
          value="Sony"
          onChange={onChangeBrandHandler}
        ></input>
        <label>OnePlus</label>
        <input
          type="checkbox"
          value="OnePlus"
          onChange={onChangeBrandHandler}
        ></input>
      </div>
      <div>
        {loading ? (
          <p>Loading....</p>
        ) : (
          products.map((i) => (
            <div key={i._id}>
              <h1>{i.name}</h1>
              <h1>{i.price}</h1>
              <h1>{i.category}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductD;
