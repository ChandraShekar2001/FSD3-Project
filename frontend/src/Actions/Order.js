import axios from 'axios'

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": 'http://localhost:3000',
    },
    withCredentials: true,
  }

export const createOrder=(order)=>async(dispatch)=>{
     console.log(order);
    try{
        dispatch({type:"createOrderRequest"});
        const url=`http://localhost:4000/api/v1/order/new`;
        const {data}= await axios.post(url,order,config)
        //  console.log(data);
        dispatch({
            type:"createOrderSuccess",
            payload:data.order,
        })
    }
    catch(error){
        dispatch({
            type:"createOrderFail",
            payload:error.message
        })
    }

}

export const myOrders=()=>async(dispatch)=>{
    try{
        dispatch({type:"myOrderRequest"})
        const url=  `http://localhost:4000/api/v1/orders/me`
        const {data}=await axios.get(url,config)
        console.log('myorder');
        console.log(data);
        dispatch({
            type:"myOrderSuccess",
            payload:data.orders,
        })

    }catch(error){
        dispatch({
            type:"myOrderFail",
            payload:error.message
        })
    }
}

//All Orders admin

export const getAllOrders=()=>async(dispatch)=>{
    try{
        dispatch({type:"allOrdersRequest"})
        const url=`http://localhost:4000/api/v1/admin/orders`
        const {data}=await axios.get(url,config)
        console.log("getAllorders");
        console.log(data);
        dispatch({
            type:"allOrdersSuccess",
            payload:data.orders
        })
    }catch(error){
        dispatch({
            type:"allOrdersFail",
            payload:error.message
        })
    }
}

export const updateOrder=(order,id)=>async(dispatch)=>{
    console.log(order,id);
    try{
        dispatch({type:"updateOrderRequest"})
        const url=`http://localhost:4000/api/v1/admin/order/${id}`
        const {data}=await axios.put(url,order,config)
        console.log(data);
        dispatch({
            type:"updateOrderSuccess",
            // payload:data.orders
        })
    }catch(error){
        dispatch({
            type:"updateOrderFail",
            payload:error.message
        })
    }
}

export const deleteOrder=(id)=>async(dispatch)=>{
    try{
        dispatch({type:"deleteOrderRequest"})
        const url=`http://localhost:4000/api/v1/admin/order/${id}`;
        const {data}=await axios.delete(url,config)
        console.log(data);
        dispatch({
            type:"deleteOrderSuccess",
            payload:data.orders
        })
    }catch(error){
        dispatch({
            type:"deleteOrderFail",
            payload:error.message
        })
    }
} 

export const getOrderDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:"getOrderRequest"})
        const url=`http://localhost:4000/api/v1/order/${id}`
        const {data}=await axios.get(url,config)
        console.log(data);
        dispatch({
            type:"getOrderSuccess",
            payload:data.order
        })
    }catch(error){
        dispatch({
            type:"getOrderFail",
            payload:error.message
        })

    }
}

