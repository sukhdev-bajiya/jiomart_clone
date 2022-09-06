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
      `https://masai-server.herokuapp.com/items?item_addtocart=true`
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
    document.getElementById("cartDataSection_container").innerHTML = `
    <div class="cartDataliftside_container">
        <h1>My Cart (<samp>${count}</samp>)</h1>
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
            <hr> <img src="https://www.jiomart.com/msassets/images/icons/orders_review_inactive.svg" alt="">
            <span>Order Summary</span>
            <hr> <img src="https://www.jiomart.com/msassets/images/icons/payment_inactive.svg"
                alt=""><span>Payment</span>

        </div>
        <div id="applyCouponPart1"></div>
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

            <div class="net-amount">
                <label>Total Amount</label><span id="cart_netpay_amt1">₹${totalPayment}.00</span>
            </div>
            <p class="save-amount cart-savings ng-star-inserted">You Save ₹${savePayment}.00</p>


        </div>
        <div class="process-col">
            <button onclick="goonordersummarypage()">Place
                Order</button>
        </div>
    </div>
    `;
    data.forEach((element) => {
      let buttonInt;
      if (element.item_quantity == 0) {
        buttonInt = ` <button type="button"><span class="txt_btn">Add to Cart</span><span class="add_plus" onclick="updateproductValuesplus(${element.id},${element.item_quantity})"></span></button>`;
      } else {
        buttonInt = `
              <button type="button" style="background-color:#fff "><span class="qty_minus" onclick="updateproductValuesminus(${element.id},${element.item_quantity})"></span><span class="qty_valur" style="color:black">${element.item_quantity}</span><span class="add_plus" style="background-image:url(https://www.jiomart.com/assets/version1659035733/smartweb/images/icons/plus-bluecolor.svg)" onclick="updateproductValuesplus(${element.id},${element.item_quantity})"></span></button>
              `;
      }
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
                <div id="homepage_TopDeals_part_Addtocart_btn">
                    ${buttonInt}
                </div>
            </div>
        `;
      document.querySelector(".addproducttocartpageitems").append(div);
    });

    if (localStorage.getItem("jiomartUserNotLogin") == "false") {
      document.getElementById("applyCouponPart1").innerHTML = `
        <div>
            <h4>Apply Coupon</h4> <span>VIEW ALL</span>
        </div>
        <div>
            <a href="./signup.html">Log in</a> to see best offers and cashback deals
        </div>
        `;
    } else {
      document.getElementById("applyCouponPart1").innerHTML = `
        <div>
        <input type="text" id="userPromoCode" placeholder="Enter your promo code"> <button onclick="applyCouponcodeandGet()">Apply Coupon</button>
        </div>
        `;
    }
    document.getElementById("countOfCart").innerHTML = data.length;
  } catch (error) {
    console.log(error);
  }
}
function goonordersummarypage() {
  window.open("./ordersummary.html", "_Self");
}

function applyCouponcodeandGet() {
  let promo = document.getElementById("userPromoCode").value;
  if (promo == "masai20") {
    alert("Coupon add successful");
    localStorage.setItem("userPromoCode", true);
    window.open("./ordersummary.html", "_Self");
  } else {
    alert("Please enter a valid coupon code.");
  }
}
