import React, { useState, useEffect } from "react";
import "../components/styles/tables.css";
import { BsPencilFill, BsTrash } from "react-icons/bs";
import { getAllUser,deleteuser} from "../../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import UpdateUser from "./UpdateUser";
const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  const { users } = useSelector((state) => state.user);
  const [pencil, setPencil] = useState(false);
  const [puser,setPuser]=useState();
   const onChangePencilHandler = (i) => {
     setPencil(true);
     setPuser(i)
   };

   const onDeleteHandler=(i)=>{
    dispatch(deleteuser(i._id))
   }
  return (
    <>
      {
        !pencil?
        <div className="tableContainer">
        <div className="table-box">
          <h1>ALL USERS</h1>
          <table>
            <tbody>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </tbody>
            <tbody>
            {users.map((i) => 
                <tr>
                  <td>{i._id}</td>
                  <td>{i.email}</td>
                  <td>{i.name}</td>
                  <td>{i.role}</td>
                  <td>
                    <span className="tableIcons">
                      <BsPencilFill onClick={()=>onChangePencilHandler(i)} />
                    </span>
                    <span className="tableIcons">
                      <BsTrash onClick={()=>onDeleteHandler(i)} />
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>:
      <UpdateUser id={puser._id} name={puser.name} email={puser.email} role={puser.role} />
      }
    </>
  );
};

export default UsersList;
