import React from 'react'
import HeaderLogo from './HeaderLogoComponent/HeaderLogo'
import HeaderSearch from './HeaderSearchComponent/HeaderSearch'
import HeaderControl from './HeaderControlComponent/HeaderControl'

function Header(){
  return <>
    <div className='flex flex-row gap-x-10 items-center px-[40px]'>
      <HeaderLogo/>
      <HeaderSearch/>
      <HeaderControl/>
    </div>
  </>
}



export default Header