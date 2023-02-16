import React, { useState, useEffect } from "react";
import "../components/styles/tables.css";
import { BsPencilFill, BsTrash } from "react-icons/bs";
import { getAllOrders } from "../../../Actions/Order";
import { useDispatch, useSelector } from "react-redux";
import ProcessOrder from "./ProcessOrder";
const OrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { orders, loading } = useSelector((state) => state.order);
  console.log(orders);
  const [pen, setPen] = useState(false);
  const [details, setDetails] = useState();
  const onClickHandler = (i) => {
    setDetails(i);
    setPen(true);
  };
  return (
    <>
      {!pen ? (
        <div className="tableContainer">
          <div className="table-box">
            <h1>ALL ORDERS</h1>
            <table>
              <tbody>
                <tr>
                  <th>Order ID</th>
                  <th>Status</th>
                  <th>Items Qty</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </tbody>
              <tbody>
                {!loading &&
                  orders.map((i) => (
                    <tr>
                      <td>{i._id}</td>
                      <td>{i.orderStatus}</td>
                      <td>{i.orderItems.length}</td>
                      <td>{i.totalPrice}</td>
                      <td>
                        <span className="tableIcons">
                          <BsPencilFill onClick={() => onClickHandler(i)} />
                        </span>
                        <span className="tableIcons">
                          <BsTrash />
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <ProcessOrder
          shippingInfo={details.shippingInfo}
          orderItems={details.orderItems}
          status={details.orderStatus}
          amount={details.totalPrice}
        />
      )}
    </>
  );
};

export default OrderList;
