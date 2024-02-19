import React from 'react'
import './style.css'

const HeaderSearch = (props) => {
  return (
    <div className='header-search flex items-center gap-x-2 bg-white md:min-w-[350px]'>
        <img className='w-[20px] h-[20px] ml-[20px] mr-[5px] object-contain' src='https://s3-alpha-sig.figma.com/img/bb50/959f/71ce6b3c94884bf4eb034d18e6c5f3eb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jz9jIAHoQfquV~VaHenHlfm7uhARzxyF~6~11XSOOof4yDTEju0a2Tylqj3-U7uq~nu0XzzqInAcWyLdFZ64OIIVflj6xnfgB6zCyIEK4oXx05hjjsxFxUrK0sW5UbWYTi~hlJTBXBD95lnuLk27GESbnJaHLgodGNn8zVrNpxEgXyjZwTXM~JHiSpz1iDK2eCdHNjML3CsQsU5J3Fh9IHsHQRq9pVCCZkHgfSfFZm324aOZ-X~BXxBHnh-~-0hEwue~s5WbU~yw61uiU~gU5soTxx-r4W4ddp2LfsfXo3L2g9Fnhq-xYB~NOsjnYUmFKt1xUUF3Q~F7XifJMjplpw__'/>
        <input id="input-search-header-id" className='header-search-input outline-none' type='text' placeholder='Freeship đến 30K' onChange={(e) =>{onChangeInputHeaderSearch(e)}}/>
        <button className='header-search-button hidden md:block' onClick={onClickSearchProduct}>
            Tìm kiếm
        </button>
    </div>
  )
}
function onClickSearchProduct(){
  const searchInput = document.querySelector("#input_value_search");
  const inputSearch = document.querySelector("#input-search-header-id");
  let urlSearch = window.location.href;
  const urlParams = new URLSearchParams(window.location.search);
  
  const searchCategory = urlParams.get("searchCategory") ?? "";
  const searchSupplier = urlParams.get("searchSupplier") ?? "";

  if(inputSearch.value == "" && (searchCategory !== "" || searchSupplier !== "")){
    history.pushState(null, null, window.location.href.split("?")[0]);
  }

  searchInput.click();
}

function onChangeInputHeaderSearch(e){
  const inputSearch = document.querySelector("#input-search-header-id");
  let urlSearch = window.location.href;

  const urlParams = new URLSearchParams(window.location.search);

  if(inputSearch.value != ""){
    urlParams.set('searchValue', inputSearch.value);
  }
  else{
    urlParams.delete('searchValue');
  }

  const newURL = urlSearch.split('?')[0] + '?' + urlParams.toString();

  history.pushState(null, null, newURL);
}

export default HeaderSearch