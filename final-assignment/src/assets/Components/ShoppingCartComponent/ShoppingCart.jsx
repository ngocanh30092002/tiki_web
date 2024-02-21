import React from 'react'
import './style.css'


const ShoppingCart = () => {
  return <>
   <section className="h-100 h-custom">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="h5">Giỏ hàng của bạn</th>
                <th scope="col">Loại sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Giá</th>
              </tr>
            </thead>
            <tbody>
              <ShoppingCartItem/>
              <ShoppingCartItem/>
            </tbody>
          </table>
        </div>

        {/* <div className="card shadow-2-strong mb-5 mb-lg-0" style={{borderRadius: '16px'}}>
          <div className="card-body p-4">

            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                <form>
                  <div className="d-flex flex-row pb-3">
                    <div className="d-flex align-items-center pe-2">
                      <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v"
                         aria-label="..." />
                    </div>
                    <div className="rounded border w-100 p-3">
                      <p className="d-flex align-items-center mb-0">
                        <i className="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit
                        Card
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-row pb-3">
                    <div className="d-flex align-items-center pe-2">
                      <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v"
                         aria-label="..." />
                    </div>
                    <div className="rounded border w-100 p-3">
                      <p className="d-flex align-items-center mb-0">
                        <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>Debit Card
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="d-flex align-items-center pe-2">
                      <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v"
                         aria-label="..." />
                    </div>
                    <div className="rounded border w-100 p-3">
                      <p className="d-flex align-items-center mb-0">
                        <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>PayPal
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-6">
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <div className="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                        placeholder="John Smith" />
                      <label className="form-label" htmlFor="typeName">Name on card</label>
                    </div>

                    <div className="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YY"
                        size="7" minLength="7" maxLength="7" />
                      <label className="form-label" htmlFor="typeExp">Expiration</label>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                        placeholder="1111 2222 3333 4444" minLength="19" maxLength="19" />
                      <label className="form-label" htmlFor="typeText">Card Number</label>
                    </div>

                    <div className="form-outline mb-4 mb-xl-5">
                      <input type="password" id="typeText" className="form-control form-control-lg"
                        placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                      <label className="form-label" htmlFor="typeText">Cvv</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="d-flex justify-content-between" style={{fontWeight: '500'}}>
                  <p className="mb-2">Subtotal</p>
                  <p className="mb-2">$23.49</p>
                </div>

                <div className="d-flex justify-content-between" style={{fontWeight: '500'}}>
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">$2.99</p>
                </div>

                <hr className="my-4"/>

                <div className="d-flex justify-content-between mb-4" style={{fontWeight: '500'}}>
                  <p className="mb-2">Total (tax included)</p>
                  <p className="mb-2">$26.48</p>
                </div>

                <button type="button" className="btn btn-primary btn-block btn-lg">
                  <div className="d-flex justify-content-between">
                    <span>Checkout</span>
                    <span>$26.48</span>
                  </div>
                </button>

              </div>
            </div>

          </div>
        </div> */}

      </div>
    </div>
  </div>
</section>
  
  </>
}


function ShoppingCartItem(){
    return <>
    <tr>
        <th scope="row">
        <div className="d-flex align-items-center">
            <img src="https://i.imgur.com/2DsA49b.webp" className="img-fluid rounded-3" style={{width: '120px'}} alt=""/>
            <div className="flex-column ms-4">
            <p className="mb-2 w-[500px]">Thinking, Fast and Slow Daniel Kahneman</p>
            </div>
        </div>
        </th>
        <td className="align-middle">
            <p className="mb-0" style={{fontWeight: '500'}}>Digital</p>
        </td>
        <td className="align-middle">
            <div className="d-flex flex-row">
                <button className="btn btn-link px-2 btn-decrease-cart "
                    onClick={(e) => {onDecreaseQuantityCart(e);}}
                >
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.834 1.83399H6.83899H5.16099H0.166992V0.166992H5.16099H11.834V1.83399Z" fill="#787878"/>
                </svg>
                </button>

                <input id="quantity" min="0" name="quantity" type="number" value={0} readOnly="readOnly"
                    className="form-control form-control-sm input-shopping-cart" style={{width: '50px'}} />

                <button className="btn btn-link px-2 btn-increase-cart"
                    onClick={(e) => {onIncreaseQuantityCart(e);}}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.834 6.82199H6.83899V11.834H5.16099V6.82199H0.166992V5.17799H5.16099V0.166992H6.83899V5.17799H11.834V6.82199Z" fill="#787878"/>
                    </svg>
                </button>
            </div>
        </td>
        <td className="align-middle">
            <p className="mb-0" style={{fontWeight: '500'}}>$9.99</p>
        </td>
    </tr>
    </>
}

function onDecreaseQuantityCart(e){
    let parentNode = null;
    let element = e.target;
    let inputQuantityElement = null;
    
    do{
        parentNode = element.parentNode;

        inputQuantityElement = parentNode.querySelector('input');

        element = parentNode;
    }
    while(inputQuantityElement == null);

    let inputValue = inputQuantityElement.value;

    if(inputValue <= 1){
        var classListOfButtonDecrease = e.target.classList;
    
        if(!classListOfButtonDecrease.contains("disabled")){
            e.target.classList.add("disabled");
        }
    
        return;
    }

    inputQuantityElement.value = parseInt(inputValue) - 1;
}

function onIncreaseQuantityCart(e){
    let parentNode = null;
    let element = e.target;
    let inputQuantityElement = null;
    
    do{
        parentNode = element.parentNode;

        inputQuantityElement = parentNode.querySelector('input');

        element = parentNode;
    }
    while(inputQuantityElement == null);

    let btnDecrease = parentNode.querySelector(".btn-decrease-cart");
    let inputValue = inputQuantityElement.value;
  
    if(btnDecrease.classList.contains("disabled")) {
        btnDecrease.classList.remove("disabled");
    }
  
    inputQuantityElement.value = parseInt(inputValue) + 1;
}

export default ShoppingCart