import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {  myOrders } from '../../Actions/Order'

const MyOrder = () => {
  const dispatch=useDispatch() 
  const {loading,orders}=useSelector((state)=>state.order) 
  const myOrderHandler=(e)=>{
    e.preventDefault()
    dispatch(myOrders())
  }

  return (
    <div><h1>MyOrder</h1>
    <button type='button' onClick={myOrderHandler}>myOrder</button>

     
    </div>
  )
}

export default MyOrder