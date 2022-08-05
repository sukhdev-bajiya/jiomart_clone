document.body.innerHTML = `
<section id="navabar_section"></section>
<section id="location_popup_section"></section>
<section id="slide_menu_slider_section"></section>
<section id="product_Overview_Nav"></section>
<section id="product_Overview_section"></section>
<section id="Item_Description"></section>
<section id="footer_section"></section>
`;
dishplayProductOnItemData();
async function dishplayProductOnItemData() {
  try {
    let id = localStorage.getItem("selectProductIdandshowDetails");
    let res = await fetch(`https://jsonservermasai.herokuapp.com/items/${id}`);
    let data = await res.json();

    document.getElementById("product_Overview_Nav").innerHTML = `
    <ul>
        <li>
            <a href="./index.html">Home</a>
        </li>
        <li>
            <i class="fa-solid fa-angle-right"></i>
        </li>
        <li>
            <span> All Categories </span
            >
        </li>
        <li>
            <i class="fa-solid fa-angle-right"></i>
        </li>
        <li>
            <span id="ProductNameinOverViewNav">${data.item_name}</span
            >
        </li>
    </ul>
    `;
    let buttonInt;
    if (data.item_quantity == 0) {
      buttonInt = ` <button type="button" style="width: 175px;"><span class="txt_btn">Add to Cart</span><span class="add_plus" onclick="updateproductValuesplus(${data.id},${data.item_quantity})"></span></button>`;
    } else {
      buttonInt = `
            <button type="button" style="background-color:#fff; width: 175px; "><span class="qty_minus" onclick="updateproductValuesminus(${data.id},${data.item_quantity})"></span><span class="qty_valur" style="color:black">${data.item_quantity}</span><span class="add_plus" style="background-image:url(https://www.jiomart.com/assets/version1659035733/smartweb/images/icons/plus-bluecolor.svg)" onclick="updateproductValuesplus(${data.id},${data.item_quantity})"></span></button>
            `;
    }

    let likeornot;
    if (data.item_like) {
      likeornot = 'style="color:red"';
    }
    document.getElementById("product_Overview_section").innerHTML = `
    <div class="All_Images_of_Selected_Product">
        <div class="AllImagesSlider"></div>
    
        <div class="SelectedFromImagesSlider">
            <img
            class="product-image-photo"
            src="${data.item_img_url}"
            alt=""
            />
        </div>
        </div>
    
        <div class="NameDesc_of_Selected_Product">
        <div class="Product_Names_Desc">
            <p class="Product_fullName">${data.item_name}</p>
        </div>
    
        <div class="all_prices_div">
            <p class="final_price_PO">₹ ${data.item_final_price}.00</p>
            <p class="price_PO">M.R.P: <strike>₹ ${data.item_price}.00</strike></p>
            <i class="fa-solid fa-heart" class="heart_PO" ${likeornot} onclick="likeProductvalue(${data.id}, ${data.item_like})"></i>
        </div>
    
        <div>
            <p class="save_price">
            You Save : <span class="showGreenText">₹ ${data.item_disc_price}.00</span> Inclusive of
            all taxes
            </p>
            <p class="showGreenText">In Stock</p>
            <p>Sold By <span class="showBlueText">Reliance Retail</span></p>
            <p>Inaugural Offer <span class="price_PO">Free Shipping</span></p>
        </div>
    
        <div id="homepage_TopDeals_part_Addtocart_btn"> ${buttonInt} </div>
    
        <div class="enter_pincode_divv">
            <button ><i class="fa-solid fa-location-dot"></i></button>
            <input
            type="text"
            maxlength="6"
            minlength="6"
            id="pincodeFromPopUp1"
            placeholder="Enter your Pincode"
            />
        </div>
    
        <div class="Available_Offers_Parent_div">
            <h3>Available Offers <span>3</span></h3>
            <div>
            <div class="Available_Offer_div">
                <p class="Available_Offers_1">BUY MORE SAVE MORE</p>
                <p class="Available_Offers_2">
                Get Sugar at ₹ 9 only on Grocery Shopping of Min. ₹ 1499.
                </p>
                <p class="Available_Offers_3">View 1 Offer</p>
            </div>
            <div class="Available_Offer_div">
                <p class="Available_Offers_1">ADDITIONAL OFFERS</p>
                <p class="Available_Offers_2">
                Get Sugar at Rs.9 only on Grocery Shopping of Min. 1499.
                </p>
                <p class="Available_Offers_3">View 1 offer</p>
            </div>
            <div class="Available_Offer_div">
                <p class="Available_Offers_1">BANK OFFERS</p>
                <p class="Available_Offers_2">
                Pay using Paytm Wallet &amp; Get up to Rs. 750/- Cashback.
                </p>
                <p class="Available_Offers_3">View 6 more offers</p>
            </div>
            </div>
            <h3 class="SeeMorePo"><span style="cursor: pointer;">SEE MORE</span></h3>
        </div>
        </div>
    `;

    data.item_other_img_url.forEach((element) => {
      let img = document.createElement("img");
      img.src = element;
      document.querySelector(".AllImagesSlider").append(img);
    });

    document.getElementById("Item_Description").innerHTML = `
    <div class="feat_detail">
    <h2 id="first_title">Description</h2>
    <div id="first_desc">
      <p>
        <b>${data.item_name}</b><br />
        Keep clothes looking fresh and clean with Surf Excel Matic Top Load
        Detergent Powder that ensures tough stain removal from your clothes.
        This detergent powder is suitable for both your white and coloured
        clothes. It removes dirt from clothes, thereby removing dullness from
        them and leaving a pleasant fragrance. So go ahead and buy this
        product online today!
      </p>
      <p>
        <b>Disclaimer:</b><br />Despite our attempts to provide you with the
        most accurate information possible, the actual packaging, ingredients
        and colour of the product may sometimes vary. Please read the label,
        directions and warnings carefully before use.
      </p>
    </div>
    </div>
    
    <div id="Features_List">
    <h2>Features & Details</h2>
    <div id="second_desc">
      <p>Removes tough stains</p>
      <p>Leaves a pleasant scent</p>
    </div>
    
    </div>
    `;
    if (localStorage.getItem("userpincodelocal") == null) {
      document
        .getElementById("pincodeFromPopUp1")
        .setAttribute("value", "302034");
    } else {
      document.getElementById("pincodeFromPopUp1").value =
        localStorage.getItem("userpincodelocal");
    }
  } catch (error) {
    console.log(error);
  }
}
