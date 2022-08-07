document.body.innerHTML = `
<section id="navabar_section"></section>
<section id="location_popup_section"></section>
<section id="slide_menu_slider_section"></section>
<section id="cartDataSection_container"></section>
<section id="footer_section"></section>
`;

showcartpageData();
async function showcartpageData() {
  try {
    let res = await fetch(
      `https://jsonservermasai.herokuapp.com/items?item_addtocart=true`
    );
    let data = await res.json();
    let totalPayment = 0;
    let savePayment = 0;
    let count = 0;
    data.forEach((element) => {
      totalPayment += element.item_final_price * element.item_quantity;
      savePayment += element.item_disc_price * element.item_quantity;
      count++;
    });
    document.querySelector(".mc_amount").innerText = `₹ ${totalPayment}.00`;
    document.querySelector(
      ".mc_savings"
    ).innerHTML = `You save ₹ ${savePayment}.00`;
    document.querySelector(".items").innerHTML = `${count} item(s)`;

    let coupanPayment = (totalPayment * 20) / 100;
    document.getElementById("cartDataSection_container").innerHTML = `
    <div class="cartDataliftside_container">
        <h1>Order Summary</h1>
        <div>
        <h4>Select Delivery Address</h4>
        <div id="userAddressShowForD">
        
        </div>
        </div>
        <div>
            <h4><span>Basket (<samp>${count}</samp> items)</span><span>₹${totalPayment}.00</span></h4>

            <div class="offersUpdateinAddcartPage">
                <span></span>
                <p>Offer is
                    applicable only on products sold by Reliance Retail . For specific exclusions &amp; offer
                    details refer <a href="#">T&amp;C</a></p>
            </div>
            <div class="addproducttocartpageitems">
                
            </div>
        </div>
    </div>
    <div class="cartDatarightside_container">
        <div>
            <img src="https://www.jiomart.com/msassets/images/icons/cart_blue_active.svg" alt=""><span>Your
                Cart</span>
            <hr> <img src="https://www.jiomart.com/msassets/images/icons/orders_review_active.svg" alt="">
            <span>Order Summary</span>
            <hr> <img src="https://www.jiomart.com/msassets/images/icons/payment_inactive.svg"
                alt=""><span>Payment</span>

        </div>
        <div id="sendmessageonwhatsapp1">
        </div>
        <div class="sticky-top">
            <h4 class="paymentdetails-title">Payment Details</h4>
            <div class="subtoal">
                <label>MRP Total</label><span id="cart_sub_total">₹${
                  totalPayment + savePayment
                }.00</span>
            </div>

            <div class="discount cart-discount ng-star-inserted"> <label>Product
                    Discount</label><span id="cart_total_disc1">-
                    ₹${savePayment}.00</span></div>

            <div class="totel-amount">
                <label>Amount</label><span id="cart_netpay_amt1">₹${totalPayment}.00</span>
            </div>
            <div class="promo-amount">
                <label>Coupon Amount</label><span id="cart_netpay_amt1">- ₹${coupanPayment}</span>
            </div>
            <div class="net-amount">
                <label>Total Amount</label><span id="cart_netpay_makepayment">₹${
                  totalPayment - coupanPayment
                }</span>
            </div>
            <p class="save-amount cart-savings ng-star-inserted">You Save ₹${
              savePayment + coupanPayment
            }</p>


        </div>
        <div class="process-col">
            <button onclick="goonmakepaymentpage()">Make Payment</button>
        </div>
    </div>
    `;
    data.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `
            <div>
                <img class="pro-img ng-star-inserted"
                    src="${element.item_img_url}">
            </div>

            <div>
                <p>${element.item_name.slice(0, 20)}...</p>
                <p><span>₹${
                  element.item_final_price * element.item_quantity
                }.00</span> <span>₹${
        element.item_price * element.item_quantity
      }.00 </span> <span>You Save ₹${
        element.item_disc_price * element.item_quantity
      }.00</span> </p>
                <p>Sold By <span>Reliance Retail</span></p>
                <p>Qty : ${element.item_quantity}</p>
            </div>
        `;
      document.querySelector(".addproducttocartpageitems").append(div);
    });

    if (localStorage.getItem("userPromoCode") == "true") {
    }
    document.getElementById("countOfCart").innerHTML = data.length;
  } catch (error) {
    console.log(error);
  }
}

function goonmakepaymentpage() {
  let pay = document
    .getElementById("cart_netpay_makepayment")
    .innerText.slice(1, 100);
  console.log(pay);
  localStorage.setItem("usemakepayment", pay);
  window.open("./makepayment.html", "_Self");
}

checkuserdatainoderpage();
async function checkuserdatainoderpage() {
  try {
    let userndata = localStorage.getItem("userNumberOndata");
    let res = await fetch(
      `https://jsonservermasai.herokuapp.com/jiomartuserdata?user_number=${userndata}`
    );
    let data = await res.json();
    document.getElementById("userAddressShowForD").innerHTML = `
    <pre>
    <input type="text" value="${data[0].user_address}" id="userAddressShowForDAddress" disabled>
    <input type="text" value="${data[0].user_pincode}" id="userAddressShowForDPincode" disabled>

    <button onclick="updateDaddressFun()" id="updateDaddressID">Change/Add Address</button>
    </pre>
    `;
  } catch (error) {
    console.log(error);
  }
}
function updateDaddressFun() {
  if (
    document.getElementById("updateDaddressID").innerText ==
    "Change/Add Address"
  ) {
    document.getElementById("userAddressShowForDAddress").disabled = false;
    document.getElementById("userAddressShowForDPincode").disabled = false;
    document.getElementById("updateDaddressID").innerHTML = "Update Address";
  } else {
    document.getElementById("userAddressShowForDAddress").disabled = true;
    document.getElementById("userAddressShowForDPincode").disabled = true;
    document.getElementById("updateDaddressID").innerHTML =
      "Change/Add Address";
    let userndata = localStorage.getItem("userNumberOndataID");
    fetch(
      `https://jsonservermasai.herokuapp.com/jiomartuserdata/${userndata}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          user_address: document.getElementById("userAddressShowForDAddress")
            .value,
          user_pincode: document.getElementById("userAddressShowForDPincode")
            .value,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
