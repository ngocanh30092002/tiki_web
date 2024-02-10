import React from 'react'
import './style.css'

const HeaderSearch = () => {
  return (
    <div className='header-search min-w-[350px] flex items-center gap-x-2 '>
        <img className='w-[20px] h-[20px] ml-[20px] mr-[5px] object-contain' src='https://s3-alpha-sig.figma.com/img/bb50/959f/71ce6b3c94884bf4eb034d18e6c5f3eb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jz9jIAHoQfquV~VaHenHlfm7uhARzxyF~6~11XSOOof4yDTEju0a2Tylqj3-U7uq~nu0XzzqInAcWyLdFZ64OIIVflj6xnfgB6zCyIEK4oXx05hjjsxFxUrK0sW5UbWYTi~hlJTBXBD95lnuLk27GESbnJaHLgodGNn8zVrNpxEgXyjZwTXM~JHiSpz1iDK2eCdHNjML3CsQsU5J3Fh9IHsHQRq9pVCCZkHgfSfFZm324aOZ-X~BXxBHnh-~-0hEwue~s5WbU~yw61uiU~gU5soTxx-r4W4ddp2LfsfXo3L2g9Fnhq-xYB~NOsjnYUmFKt1xUUF3Q~F7XifJMjplpw__'/>
        <input className='header-search-input outline-none' type='text' placeholder='Freeship đến 30K'/>
        <button className='header-search-button'>
            Tìm kiếm
        </button>
    </div>
  )
}

export default HeaderSearch