import React from 'react'
import { useEffect, useState } from 'react';
import ProductFilter from './ProductFilterComponent/ProductFilter';
import NavigationPath from './NavigationPathComponent/NavigationPath';
import SideBar from './SideBarComponent/SideBar';
import Products from './ProductsComponent/Products';
import Paging from './PagingComponent/Paging';
import DetailProduct from '../DetailProductComponent/DetailProduct';
import './style.css';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await GetProductsList();
        setProducts(data);
      } catch (error) {
        alert('An error occurred:', error);
      }
    })();
  }, [])

  return <>
    <div className='main'>
        <Routes>
          <Route path='/' element={<MainListProducts data={products}/>}/>

          {products.map(product => {
            return <Route key={product.id} path={`/detailproduct/${product.id}`} element={<DetailProduct data={product}/>}/>  
          })}
        </Routes>

        <input type='hidden' id="input_value_search" onClick={(e) =>{onClickSearchProduct(e, setProducts, products)}}/>
    </div>
  </>
}

function MainListProducts(props){
  return <>
    <NavigationPath className = 'hidden main-nav-path md:block'/>
    <ProductFilter className='bg-white mb-[20px] md:hidden'/>

    <div className='main-content grid grid-cols-12'>
      <SideBar className='hidden lg:block lg:col-span-2' data ={props.data}/>
      <Products className='col-span-12 lg:col-span-10' data={props.data}/>
      <Paging className='hidden md:block lg:block col-span-12'/>
    </div>
  </>
}

function GetProductsList(){
  const apiPath = "https://h5ltj4-8080.csb.app/books";

  var products = fetch(apiPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON: ${response.statusText}`);
      }
      return response.json();
    })

  return products;
}


function onClickSearchProduct(event, setProducts, products){
  var urlParams = new URLSearchParams(window.location.search);

  var searchValue = urlParams.get("searchValue") ?? "";
  var searchCategory = urlParams.get("searchCategory")?? "";
  var searchSupplier = urlParams.get("searchSupplier")?? "";

  let productFilter = [...products];

  if(searchValue !== null && searchValue !== ''){
    productFilter = productFilter.filter((product) => {
      let productName = product.name.toLowerCase();
      return productName.includes(searchValue.toLowerCase());
    })
  }

  if(searchCategory !== null && searchCategory !== ''){
    productFilter = productFilter.filter((product) =>{
      let category = product.categories.name.toLowerCase();
      return category.includes(searchCategory.toLowerCase())
    })
  }


  console.log(searchSupplier);

  if(searchSupplier !== null && searchSupplier !== ''){
    productFilter = productFilter.filter((product) =>{
      let supplierName = product.current_seller.name;
      return searchSupplier.indexOf(supplierName) !== -1;
    })
  }
  // let productFilter = [];
  // if(searchValue !== ""){
  //   productFilter = products.filter((product) => {
  //     let productName = product.name.toLowerCase();
  //     return productName.includes(searchValue);
  //   })
  // }
  if(searchValue == "" && searchCategory == "" && searchSupplier.length == 0){
    (async () => {
      try {
        const data = await GetProductsList();
        setProducts(data);
      } catch (error) {
        alert('An error occurred:', error);
      }
    })();
  }
  else if(productFilter.length > 0) {
    setProducts(productFilter);
  }
  else{
    if(searchValue !== "" ){
      alert("There were no products found in the store");
    }
    else if(searchCategory!== "" ){
      alert("There were no products found in the store");
    }
    else if(searchSupplier!== "" ){
      alert("There were no products found in the store");
    }

    history.pushState(null, null, window.location.href.split("?")[0]);

    (async () => {
      try {
        const data = await GetProductsList();
        setProducts(data);
      } catch (error) {
        alert('An error occurred:', error);
      }
    })();

  }
}
export default Main