import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrder, getAllOrders, getOrderDetails, updateOrder } from "../../Actions/Order";

const AdminOrders = () => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector((state) => state.order);
  const getAllOrdersHandler = (e) => {
    e.preventDefault();
    dispatch(getAllOrders());
  };

  const updateOrderHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateOrder(
        {
          status: "shipped",
        },
        "625461fc3e1b0c7ff4671f7c"
      )
    );
  };

  const deleteOrderHandler=(e)=>{
    e.preventDefault()
    dispatch(deleteOrder('63b6e1e7a5a6f368abc96a1f'))
  }
  const orderdetailsHandler=(e)=>{
    e.preventDefault()
    dispatch(getOrderDetails('63b6fbc8e216eb94bcb9021e'))
  }

  return (
    <div>
      <h1>AdminOrders</h1>
      <button type="button" onClick={getAllOrdersHandler}>
        getAllOrder
      </button>
      <button type="button" onClick={updateOrderHandler}>
        updateOrder
      </button>
      <button type="button" onClick={deleteOrderHandler}>
        deleteOrder
      </button>
      <button type="button" onClick={orderdetailsHandler}>
        getOrderdetails
      </button>
    </div>
  );
};

export default AdminOrders;
