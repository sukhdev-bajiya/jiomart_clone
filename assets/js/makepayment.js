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

    let coupanPayment = (totalPayment * 20) / 100;
    document.getElementById("cartDataSection_container").innerHTML = `
    <div id="PaymentDetailsHeading">
      <h1>PAYMENT DETAILS</h1>
      <div>
        <img
          src="https://www.jiomart.com/msassets/images/icons/cart_blue_active.svg"
          alt=""
        /><span>Your Cart</span>
        <hr />
        <img
          src="https://www.jiomart.com/msassets/images/icons/orders_review_active.svg"
          alt=""
        />
        <span>Order Summary</span>
        <hr />
        <img
          src="https://www.jiomart.com/msassets/images/icons/credit-debit-card-lblue.svg"
          alt=""
        /><span>Payment</span>
      </div>
    </div>

    <section id="payment_section">
      <div id="payment_methods">
        <div id="payment_options">
          <h3>Payment Methods</h3>
          <div class="debit-logo">
            <input type="radio" name="choosePayementMethod" />
            <i class="fa-solid fa-credit-card"></i>
            <p class="bold_options">Debit Card</p>
          </div>
          <div class="credit-logo">
            <input type="radio" name="choosePayementMethod" />
            <i class="fa-solid fa-credit-card"></i>
            <p class="bold_options">Credit Card</p>
          </div>
          <div>
            <input type="radio" name="choosePayementMethod" />
            <img
              src="https://www.jiomart.com/assets/pgicon/Paytm_lo.png"
              alt=""
            />
            <p class="bold_options">Paytm</p>
          </div>
          <div>
            <input type="radio" name="choosePayementMethod" />
            <img
              src="https://www.jiomart.com/assets/pgicon/Phone_Pay_lo.png"
              class="gpayLogo"
            />
            <p class="bold_options">Phone Pay | UPI</p>
          </div>
          <div>
            <input type="radio" name="choosePayementMethod" />
            <img
              src="https://www.jiomart.com/msassets/images/jio-money.png"
              class="gpayLogo"
            />
            <p class="bold_options">JioMoney</p>
          </div>
          <div>
            <input type="radio" name="choosePayementMethod" />
            <img
              src="https://www.jiomart.com/assets/pgicon/Mobikwik_lo.png"
              class="gpayLogo"
            />
            <p class="bold_options">MobiKwik</p>
          </div>
          <div>
            <input type="radio" name="choosePayementMethod" />
            <img
              src="https://www.jiomart.com/assets/pgicon/Free_Charge_lo.png"
              class="gpayLogo"
            />
            <p class="bold_options">Freecharge Pay Later | UPI | Wallet</p>
          </div>
          <div>
            <input type="radio" name="choosePayementMethod" />
            <img
              src="https://www.jiomart.com/msassets/images/icons/google-pay-new.png"
              class="gpayLogo"
            />
            <p class="bold_options">Google Pay</p>
          </div>
          <div>
            <input type="radio" name="choosePayementMethod" />
            <img
              src="https://www.jiomart.com/images/cms/wysiwyg/cms/1631595196_payzapp.png"
            />
            <p class="bold_options">PAYZAPP</p>
          </div>
          <div class="codLogo">
            <input type="radio" name="choosePayementMethod" />
            <i class="fa-solid fa-handshake-angle"></i>
            <p class="bold_options">Cash On Delivery</p>
          </div>
        </div>
      </div>

      <div id="payment_details">
      <div id="payment_Details_main">
        <h3 class="balck_TP">Payment Details</h3>
        <div>
          <p class="grey_Tp">MRP Total</p>
          <p>₹<span>${totalPayment + savePayment}.00</span></p>
        </div>
        <div>
          <p class="grey_Tp">Product Discount</p>
          <p>-₹<span>${savePayment + coupanPayment}</span></p>
        </div>
        <div>
          <p class="balck_TP">Total Amount</p>
          <p class="balck_TP">₹<span id="amountTotal">${
            totalPayment - coupanPayment
          }</span></p>
        </div>
        <div class="yousaveIt">
          <p>You save ₹<span>${savePayment + coupanPayment}</span></p>
        </div>
      </div>
      <button id="ProceedToPay" onclick="ProceedToPay()">
        Proceed To Pay ₹ <span id="totalPayment">${
          totalPayment - coupanPayment
        }</span>
      </button>
    </div>
    `;
  } catch (error) {
    console.log(error);
  }
}

// JS for Final Payment Page
