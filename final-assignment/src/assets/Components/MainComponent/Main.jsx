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
        <SideBar className='hidden lg:block lg:col-span-2'/>
        <Products className='col-span-12 lg:col-span-10'/>
        <Paging className='hidden md:block lg:block col-span-12 '/>
      </div>
    </div>
  </>
}

export default Main