import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {newReview,getAllReviews,deleteReview} from '../../Actions/Product'
const ReviewProduct = () => {
const {loading,products}=useSelector((state)=>state.product)
const dispatch=useDispatch()


const createReviewOfProduct=(e)=>{
    e.preventDefault()
    dispatch(newReview({
        rating:3,
        comment:'changed review for product NOKIA 2',
        productId:'63b50d55528fae1f980c04fa'
    }))
}
//   useEffect(() => {
//     dispatch(newReview({
//         rating:3,
//         comment:'changed review for product NOKIA 2',
//         productId:'63b50d55528fae1f980c04fa'
//     }))
//   }, [dispatch])
//   console.log(products);

  const allReviewsOfProduct=(e)=>{
    e.preventDefault();
    dispatch(getAllReviews('63b50d55528fae1f980c04fa'))
    // console.log(products);
  }

  const deleteReviewOfProduct=(e)=>{
    e.preventDefault()
    dispatch(deleteReview("63b676cf4373d7c5da738feb","63b50d55528fae1f980c04fa"))

  }

  return (
    <div>{loading ? (
        <p>Loading....</p>
      ) : (
        products.map((i) => (
          <div key={i._id}>
            <h1>{i.name}</h1>
            <h1>{i.price}</h1>
            <h1>{i.reviews.length && i.reviews[0].comment}</h1>
          </div>
        ))
      )}
      <button type="button" onClick={createReviewOfProduct}>create review</button>
<button type="button" onClick={allReviewsOfProduct}>get all reviews</button>
<button type="button" onClick={deleteReviewOfProduct}>delete review</button>
      </div>
  )
}

export default ReviewProduct