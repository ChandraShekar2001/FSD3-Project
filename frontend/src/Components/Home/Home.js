import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "./Home.module.css";
import Banner from "./Banner";
// import Footer from "./Footer";
import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../Actions/Product";
import { useEffect } from "react";
import Afooter from "./Afooter.js"
// import { Link } from "react-router-dom";
// import Afooter from "./Afooter";

const images = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
  "/images/carousel-4.jpg",
  "/images/carousel-5.jpg",
];

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions());
  }, [dispatch]);

  const {products} = useSelector((state) => state.product);
  return (
    <>
      <body style={{marginTop:"4.5%"}} className={classes.body}>
        <Carousel>
          {images.map((image, i) => (
            <img
              className={classes.images}
              src={image}
              key={i}
              alt={`${i} Slide`}
            />
          ))}
        </Carousel>

        <div className={classes.featuredProductsSection}>
          <h1 className={classes.featuredProductHeading}>FEATURED PRODUCTS</h1>
          <div className={classes.line}></div>
          <div className={classes.featuredProducts}>
            {products.map((product) => 
              // <Link
              //   key={product._id}
              //   to={`/product/${product._id}`}
              //   className={classes.link}
              // >
                <ProductCard
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  id={product._id}
                />
              // </Link>
            )}
          </div>
        </div>
        <Banner />
        <br />
        <br />
        {/* <Afooter /> */}
      </body>
    </>
  );
};

export default Home;
