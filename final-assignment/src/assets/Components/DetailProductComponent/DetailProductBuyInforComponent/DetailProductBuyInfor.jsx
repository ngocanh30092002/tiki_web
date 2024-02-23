import React from 'react'

const DetailProductBuyInfor = (props) => {
  const sellPrice = props.data.current_seller.price ?? 0;

  return <>
    <div className = {props.className}>
      <div className="p-[20px] bg-white rounded-[8px] flex flex-col gap-[8px] justify-start">
        <div className="pd-buy-infor__title">
          Số lượng
        </div>

        <div className="pd-buy-infor__quantity">
          <button id="btn-decrease-id" className="btn-decrease-quantity btn-quantity" type='button' onClick={(e) => {onClickDecreaseQuantity(e, sellPrice)}} > 
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.834 1.83399H6.83899H5.16099H0.166992V0.166992H5.16099H11.834V1.83399Z" fill="#787878"/>
            </svg>
          </button>
          <input id="input-quantity" className="input-buy-quantity" type="text" value={1} onChange={() =>{}}/>
          <button id = "btn-increase-id" className="btn-inscrease-quantity btn-quantity"type='button' onClick ={(e)=>{onClickIncreaseQuantity(e, sellPrice)}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.834 6.82199H6.83899V11.834H5.16099V6.82199H0.166992V5.17799H5.16099V0.166992H6.83899V5.17799H11.834V6.82199Z" fill="#787878"/>
            </svg>
          </button>
        </div>

        <div className="pd-buy-infor__temporary">
          Tạm tính
        </div>

        <div className='pd-buy-infor__price'>
          <span id="total-price-id">{numberWithCommas(sellPrice)}</span>
        </div>

        <div className='pd-buy-infor__func-wrapper'>
          <button className="btn-buy btn-quantity-func"type='button'> Mua ngay </button>
          <button className="btn-add-cart btn-quantity-func"type='button' onClick={(e) =>{onClickAddToCart(e, props)}}> Thêm vào giỏ hàng </button>
          <button className="btn-buy-first-pay-later btn-quantity-func"type='button'> Mua trước trả sau </button>
        </div>  
      </div>
    </div>   
  </>
}

function onClickAddToCart(e , props){
  const inputQuantity = document.getElementById("input-quantity");
  const totalMoney = document.getElementById("total-price-id");
  props.data["quantityBuy"] = parseInt(inputQuantity.value);
  props.data["totalMoney"] = parseFloat(totalMoney.innerHTML.replace(".",''));
  
  console.log(props.currentCart);
  let item = props.currentCart.find(item => item.id == props.data.id);

  if(item != null){
    item.quantityBuy = item.quantityBuy + parseInt(inputQuantity.value);

    let test =  props.currentCart.filter(product => product.id != item.id);
    console.log(test);

    props.onSetCurrentCart([...test, item]);
  }
  else{
    props.onSetCurrentCart([...props.currentCart, props.data]);
  }
}

function onClickDecreaseQuantity(e, price){

  let inputQuantity = document.querySelector("#input-quantity");
  let buttonDecrease = e.target;
  let currentValue = parseInt(inputQuantity.value);
  let totalPrice = document.querySelector("#total-price-id");

  if(currentValue <= 1){
    var classListOfButtonDecrease = buttonDecrease.classList;

    if(!classListOfButtonDecrease.contains("disabled")){
      buttonDecrease.classList.add("disabled");
    }

    return;
  }
  inputQuantity.value = currentValue - 1;
  totalPrice.innerHTML = numberWithCommas(price * inputQuantity.value);
}

function onClickIncreaseQuantity(e, price){
  let inputQuantity = document.querySelector("#input-quantity");
  let buttonDecrease = document.querySelector("#btn-decrease-id");
  let currentValue = parseInt(inputQuantity.value);
  let totalPrice = document.querySelector("#total-price-id");

  if(buttonDecrease.classList.contains("disabled")) {
    buttonDecrease.classList.remove("disabled");
  }

  inputQuantity.value = currentValue + 1;
  totalPrice.innerHTML = numberWithCommas(price * inputQuantity.value);
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default DetailProductBuyInfor