import React from 'react'
import { useEffect, useState } from 'react';
import './style.css';

const Products = (props) => {
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

  return (
    <>
      <div className= {props.className}>
        <div className="list-products-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-[10px] gap-x-[8px] px-[10px]">
          {products.map(product =>{
            return <ProductItem key={product.id} data = {product}/>
          })}
        </div>
      </div>
    </>
  )
}

function ProductItem({data}){
  return <>
    <div className='product-item'>
      <ProductThumbnail data = {data}/>
      <ProductInfor data={data} />
    </div>
  </>
}

function ProductInfor({data}){
  let rating_average = data.rating_average == 0 ? "" : data.rating_average
  let quantity_sold = data.quantity_sold == null ? "" : data.quantity_sold.text

  let price_discount = Math.floor(( data.original_price - data.current_seller.price ) * 100/ data.original_price);
  
  return <>
    <div className='flex flex-col p-[10px]'>
      <div className='product-item__infor'>
        <div className='product-item__title'>
          {data.name}
        </div>

        <div className='product-item__sell-infor'>
          <div className='product-item__rating-star'>
            {rating_average}
          </div>
          <div className='product-item__number-sold'>
            {quantity_sold}
          </div>
        </div>
        
        <div className='product-item__price'>
          <div className='product-item__price-seller'>
              {data.current_seller.price}
              <span>đ</span>
          </div>
          {price_discount == 0 ? "" : <div className='product-item__price-discount'>-{price_discount}%</div>} 
        </div>
        <div className='product-item__under-price'></div>
      </div>

      <div className='product-item__ship-infor'>
        <img className='ship-infor_agency' src='https://s3-alpha-sig.figma.com/img/9f63/2df5/52d4ff178b5e56072899664c52a61fe5?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHNKww6FVO60Ps5Zp28e~pPa9wQiEWb9Mu7EYw4ROZZRlG~LaQUEKPDBUAUzdMKwMyVGGHGjQxLT4wjjJXp-UR~yvQRqPUgZ0GVr-kIbRCxZH05OlVtcXoV5tv4JK4auRQqgO-OZ7HfH8n1hPHB97V~HsV5aJJJfQ5mxfwDxhLkIE59kavXKZBuZ2x5AL6Os5k6uPKdbEmb1wgGB8dBU8vgnaPjBHRX3AAo~osLPQVyP2DIcZRT82X7pSMoZhJId9WRH~syPD3p-h5MooRx1ODYqythzyUw6SszP8WQPqjdfMYNuJEmrnsRR3GoDnQlYxLqjbwoF9So4UDW49Xxztw__'/>
        <span className='ship-infor__delivery-date'>Giao hàng siêu tốc 2h</span>
      </div>
    </div>
  </>
}
function ProductThumbnail({data}){
  return <>
    <div className='product-item__thumbnail'>
      <div className='product-item__image-wrapper'>
        <picture className='product-item__picture'>
          <source type='image/webp' srcSet= {data.images.map( (image, index) => {
            return `${image.thumbnail_url} ${index + 1}x`}
          )} />
          <img srcSet= {data.images.map( (image, index) => {
            return `${image.thumbnail_url} ${index + 1}x`}
          )} />
        </picture>
      </div>
    </div>
  </>
}

function GetProductsList(){
  const jsonFileData = "src/assets/BookData/data.json";

  var products = fetch(jsonFileData)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON: ${response.statusText}`);
      }
      return response.json();
    })

  return products;
}
export default Products