import React from 'react'
import { getAllUser,deleteuser } from '../../Actions/User'
import {useDispatch,useSelector} from 'react-redux'
const AdminUser = () => {
    const dispatch=useDispatch()
    const {loading,users}=useSelector((state)=> state.user)
    const getAllUsersHandler=(e)=>{
        dispatch(getAllUser())
    }
    const deleteUsersHandler=(e)=>{
        dispatch(deleteuser('63412eed0d157ec75c2c0059'))
    }
  return (
    <div><h1>AdminOperations</h1>
    {loading ? (
        <p>Loading....</p>
      ) : (
        users.map((i) => (
          <div key={i._id}>
            <p>{i.name}</p>
            <p>{i.email}</p>
            <p>{i.role}</p>
          </div>
        ))
      )}
    <button type='button' onClick={getAllUsersHandler}>get all users</button>
    <button type='button' onClick={deleteUsersHandler}>delete user</button>
    </div>
  )
}

export default AdminUser