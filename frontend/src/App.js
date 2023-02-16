import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/User";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/Loader/Loader";
//started here
import ProductD from "./Components/ProductCheck/ProductD";
import SingleProduct from "./Components/ProductCheck/SingleProduct";
import AdminProduct from "./Components/ProductCheck/AdminProduct";
import ReviewProduct from "./Components/ProductCheck/ReviewProduct";
import CreOrder from "./Components/OrderCheck/CreOrder";
import MyOrder from "./Components/OrderCheck/MyOrder";
import AdminOrders from "./Components/OrderCheck/AdminOrders";
import UpdProf from "./Components/UserCheck/UpdProf";
import AdminUser from "./Components/UserCheck/AminUser";
import CartChe from "./Components/CartCheck/CartChe";
import Signup from "./Components/Auth/Signup";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Profile from "./Components/User/Profile";
import MyOrderProfile from "./Components/User/MyOrder";
import MyCart from "./Components/User/Cart";
import ResetPassword from "./Components/Auth/ResetPassword";
import UpdatePassword from "./Components/Auth/UpdatePassword";
import Products from "./Components/Products/Products";
import Afooter from "./Components/Home/Afooter";
import AdminSideBar from "../src/Components/Dashboard/components/layout/AdminSideBar";
import Dashboard from "../src/Components/Dashboard/pages/Dashboard";
import ProductList from "../src/Components/Dashboard/pages/ProductList"
import NewProduct from '../src/Components/Dashboard/pages/NewProduct';
import OrderList from '../src/Components/Dashboard/pages/OrderList';
import ProductReview from '../src/Components/Dashboard/pages/ProductReview';
import UpdateUser from '../src/Components/Dashboard/pages/UpdateUser';
import UpdateProduct from '../src/Components/Dashboard/pages/UpdateProduct';
import UsersList from '../src/Components/Dashboard/pages/UsersList';
import ProcessOrder from '../src/Components/Dashboard/pages/ProcessOrder';
import OrderStatus from "../src/Components/User/OrderStatus"
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      {isAuthenticated && <Navbar />}
      {/* <Navbar/> */}
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Login />}
        />
        {/* <Route exact path="/" element = {<Home />}/>*/}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loader" element={<Loader />} />
        <Route exact path="/product" element={<ProductD />} />
        <Route exact path="/singleproduct" element={<SingleProduct />} />
        <Route exact path="/adminproduct" element={<AdminProduct />} />
        <Route exact path="/reviewproduct" element={<ReviewProduct />} />
        <Route exact path="/createOrder" element={<CreOrder />} />
        <Route exact path="/myOrder" element={<MyOrder />} />
        <Route exact path="/adminOrder" element={<AdminOrders />} />
        <Route exact path="/checkUser" element={<UpdProf />} />
        <Route exact path="/adminUser" element={<AdminUser />} />
        <Route exact path="/cart" element={<CartChe />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route
          exact
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Login />}
        />
        <Route
          exact
          path="/myorderprofile"
          element={isAuthenticated ? <MyOrderProfile /> : <Login />}
        />
        <Route
          exact
          path="/mycart"
          element={isAuthenticated ? <MyCart /> : <Login />}
        />
        <Route
          exact
          path="/updatepassword"
          element={isAuthenticated ? <UpdatePassword /> : <Login />}
        />
        <Route
          exact
          path="/products"
          element={isAuthenticated ? <Products /> : <Login />}
        />
        <Route
          exact
          path="/orderstatus"
          element={isAuthenticated ? <OrderStatus /> : <Login />}
        />
        <Route path="/admin/*" element={<AdminSideBar />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product" element={<NewProduct />} />
          <Route path="product/:id" element={<UpdateProduct />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="order/:id" element={<ProcessOrder />} />
          <Route path="users" element={<UsersList />} />
          <Route path="user/:id" element={<UpdateUser />} />
          <Route path="reviews" element={<ProductReview />} />
        </Route>
        <Route exact path="/footer" element={<Afooter />} />

        {/* AdminDashBoard */}
      </Routes>
    </>
  );
}

export default App;
