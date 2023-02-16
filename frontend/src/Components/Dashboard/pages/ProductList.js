import React, { useState, useEffect } from "react";
import { BsPencilFill, BsTrash } from "react-icons/bs";
import "../components/styles/tables.css";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct, deleteProduct } from "../../../Actions/Product";
import { Link } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);
  const [pen, setPen] = useState(false);
  const [puser, setPuser] = useState();
  const onChangePenHandler = (i) => {
    setPen(true);
    setPuser(i);
  };

  const { products } = useSelector((state) => state.product);
  return (
    <>
      {!pen ? (
        <div className="tableContainer">
          <div className="table-box">
            <h1>ALL PRODUCTS</h1>
            <table>
              <tbody>
                <tr>
                  <th>Product ID</th>
                  <th>Name</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </tbody>
              <tbody>
                {products.map((i) => (
                  <tr>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.Stock}</td>
                    <td>{i.price}</td>
                    <td>
                      <span className="tableIcons">
                        <BsPencilFill onClick={() => onChangePenHandler(i)} />
                      </span>
                      <span className="tableIcons">
                        <BsTrash
                          onClick={() => {
                            return dispatch(deleteProduct(i._id));
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <UpdateProduct
          id={puser._id}
          name={puser.name}
          price={puser.price}
          description={puser.description}
          category={puser.category}
          Stock={puser.Stock}
        />
      )}
    </>
  );
};

export default ProductList;
