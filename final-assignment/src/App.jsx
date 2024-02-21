import Header from "./assets/Components/HeaderComponent/Header"
import Main from  './assets/Components/MainComponent/Main'
import Footer from './assets/Components/FooterComponent/Footer'
import ShoppingCart from "./assets/Components/ShoppingCartComponent/ShoppingCart";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import DetailProduct from "./assets/Components/DetailProductComponent/DetailProduct";

function App() {
  return (
    <>
      <Header></Header>
      
      {/* <Main></Main> */}
      <ShoppingCart/>
      <Footer></Footer>
    </>
  )
}

export default App
