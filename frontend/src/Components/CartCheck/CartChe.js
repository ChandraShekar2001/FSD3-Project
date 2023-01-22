import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addItem,removeItem,removeCompleteItem } from '../../Actions/Cart'
const CartChe = () => {
    const dispatch=useDispatch()
    const addItemHandler=(e)=>{
        e.preventDefault()
        dispatch(addItem("6241f74a646908075e90654c",2))
    }
    const deleteItemHandler=(e)=>{
        e.preventDefault();
        dispatch(removeItem("6241f74a646908075e90654c"));
    }

    const deleteCompleteHandler=(e)=>{
      e.preventDefault();
      dispatch(removeCompleteItem("6241f74a646908075e90654c"))
    }
  return (
    <div>
        <h1>cart</h1>
        <button type='button' onClick={addItemHandler}>addItem</button>
        <button type='button' onClick={deleteItemHandler}>deleteItem</button>
        <button type='button' onClick={deleteCompleteHandler}>deleteComplete</button>
    </div>
  )
}

export default CartChe