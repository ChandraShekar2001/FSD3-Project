import './App.css';
import { useEffect } from 'react';
import {Routes, Route} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { loadUser } from './Actions/User';
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login'
import Navbar from './Components/Navbar/Navbar'
import Loader from './Components/Loader/Loader';
//started here
import ProductD from './Components/ProductCheck/ProductD'
import SingleProduct from './Components/ProductCheck/SingleProduct';
import AdminProduct from './Components/ProductCheck/AdminProduct';
import ReviewProduct from './Components/ProductCheck/ReviewProduct';
import CreOrder from './Components/OrderCheck/CreOrder';
import MyOrder from './Components/OrderCheck/MyOrder';
import AdminOrders from './Components/OrderCheck/AdminOrders';
import UpdProf from './Components/UserCheck/UpdProf'; 
import AdminUser from './Components/UserCheck/AminUser';
import CartChe from './Components/CartCheck/CartChe';
import Signup from './Components/Auth/Signup';
import ForgotPassword from './Components/Auth/ForgotPassword';
function App() {

  const dispatch=useDispatch()
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {

    dispatch(loadUser());
  }, [dispatch]);
  return (
    
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route exact path="/" element={isAuthenticated ? <Home /> : <Login />}/>
        {/* <Route exact path="/" element = {<Home />}/>*/}
        <Route exact path="/login" element = {<Login />}/> 
        <Route exact path="/loader" element = {<Loader />}/>
        <Route exact path="/product" element = {<ProductD />}/>
        <Route exact path="/singleproduct" element = {<SingleProduct />}/>
        <Route exact path="/adminproduct" element = {<AdminProduct />}/>
        <Route exact path="/reviewproduct" element = {<ReviewProduct />}/>
        <Route exact path="/createOrder" element = {<CreOrder />}/>
        <Route exact path="/myOrder" element = {<MyOrder />}/>
        <Route exact path="/adminOrder" element = {<AdminOrders />}/>
        <Route exact path="/checkUser" element = {<UpdProf />}/>
        <Route exact path="/adminUser" element = {<AdminUser />}/>
        <Route exact path="/cart" element = {<CartChe />}/>
        <Route exact path="/signup" element = {<Signup />}/>
        <Route exact path="/forgotpassword" element = {<ForgotPassword />}/>
      </Routes>
    </>
  );
}

export default App;
