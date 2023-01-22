import React, { useEffect } from "react";
import { createOrder } from "../../Actions/Order";
import { useSelector, useDispatch } from "react-redux";
const CreOrder = () => {
  const dispatch = useDispatch();
  const {loading,order}=useSelector((state)=>state.order)
  const order1 = {
    shippingInfo: {
      address: "123 India",
      city: "vizag",
      state: "AP",
      country: "India",
      pinCode: 532005,
      phoneNo: 9876543210,
    },
    orderItems: [
        {
            "id":"6241f74a646908075e90654c",
            "name":"samsung",
            "price":6000,
            // "image":"sample image",
            "quantity":2
        }],
    paymentInfo: {
      id: "samplePayment",
      status: "succeded",
    },
    itemsPrice: 2000,
    taxPrice: 200,
    shippingPrice: 50,
    totalPrice: 2250,
  };
  useEffect(() => {
    dispatch(createOrder(order1));
  }, [dispatch]);

  return (
    <div >
        {loading ? <p>Loading....</p> :  <div>
          <h1>{order._id}</h1>
        </div>
       }
    </div>
  )
}

export default CreOrder;
