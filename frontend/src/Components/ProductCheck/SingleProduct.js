import React,{useEffect} from 'react'
import { fetchSingleProduct } from '../../Actions/Product'
import {useSelector,useDispatch} from 'react-redux'

const SingleProduct = () => {
  const {loading,product}=useSelector((state)=>state.product)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchSingleProduct('62460412713ae8d937958186')) 
  }, [dispatch])
  
  return (
    <div >
        {loading ? <p>Loading....</p> : 
        <div key={product._id}>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        </div>
       }
    </div>
  )
}

export default SingleProduct