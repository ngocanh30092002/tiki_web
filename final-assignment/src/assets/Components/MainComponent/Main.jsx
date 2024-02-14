import React from 'react'
import ProductFilter from './ProductFilterComponent/ProductFilter';
import NavigationPath from './NavigationPathComponent/NavigationPath';
import SideBar from './SideBarComponent/SideBar';
import Products from './ProductsComponent/Products';
import Paging from './PagingComponent/Paging';
import './style.css';

const Main = () => {
  return <>
    <div className='main'>
      <NavigationPath className = 'main-nav-path'/>

      <div className='main-content grid grid-cols-12'>
        <ProductFilter className='hidden'/> 
        <SideBar className='col-span-2'/>
        <Products className='col-span-10'/>
        <Paging className='hidden'/>
      </div>
    </div>
  </>
}

export default Main