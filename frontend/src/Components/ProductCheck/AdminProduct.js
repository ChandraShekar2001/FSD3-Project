import React, { useEffect } from "react";
import { getAdminProduct, createProduct,updateProduct,deleteProduct } from "../../Actions/Product";
import { useSelector, useDispatch } from "react-redux";

const AdminProduct = () => {
  const { loading, products, isCreated } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);

  const onCreatehandler = (e) => {
    e.preventDefault()
    dispatch(
      createProduct({
        name: "NOKIA 9",
        description: "sample product",
        price: 3500,
        category:"Laptop",
        Stock:1
      })
      );
  };

  const onUpdateHandler=(e)=>{
    e.preventDefault()
    dispatch(updateProduct('63b50d7c528fae1f980c0500',{
      name: "NOKIA 8",
        description: "sample product changed",
        price: 895000,
        category:"Laptop",
        Stock:59
    }))
    console.log(products);
  }

  const onDeleteHandler=(e)=>{
    e.preventDefault()
    dispatch(deleteProduct("63b50ceb528fae1f980c04ef"))
  }

  return (
    <>
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        products.map((i) => (
          <div key={i._id}>
            <h1>{i.name}</h1>
            <h1>{i.price}</h1>
          </div>
        ))
      )}
      <button type="button" onClick={onCreatehandler}>
        create product
      </button>
      <button type="button" onClick={onUpdateHandler}>
        update product
      </button>
      <button type="button" onClick={onDeleteHandler}>
        delete product
      </button>
    </div>

    </>

  );
};

export default AdminProduct;
