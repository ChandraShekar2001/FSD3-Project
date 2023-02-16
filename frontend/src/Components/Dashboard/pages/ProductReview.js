import React from 'react'
import "../components/styles/tables.css";
import {BsTrash, BsSearch } from "react-icons/bs";

const ProductReview = () => {
  return (
    <>
      <div className="reviewContainer">
        <div className="searchBox">
          <input
            className='searchInput'
            type="search"
            placeholder="Type to search by Product ID . . . "
          />
          <a href="#" className="iconLink">
            <BsSearch />
          </a>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Review ID</th>
                <th>User</th>
                <th>Comment</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>21352151</td>
                <td>Nuka</td>
                <td>Nice Product</td>
                <td>4</td>
                <td>
                  <span className="tableIcons">
                    <BsTrash />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductReview
