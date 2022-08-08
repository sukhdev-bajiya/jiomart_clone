document.body.innerHTML = `
<section id="navabar_section"></section>
<section id="location_popup_section"></section>
<section id="slide_menu_slider_section"></section>
<div class="contentSection">
            <div class="leftSide">
                
            </div>
            <div class="rightSide">
                <div>
                    <img src="../assets/img/bgforall.jpg" alt="">
                </div>
                <div class="sortBut_buttons">
                    <p>Sort by:</p>
                    <button onclick="dishplayData2('')">Popularity</button>
                    <button onclick="dishplayData2('item_final_price&_order=desc')">High to Low</button>
                    <button onclick="dishplayData2('item_final_price&_order=asc')">Low to High</button>
                    <button onclick="dishplayData2('item_discount&_order=desc')">Discount</button>
                    <button onclick="dishplayData2('')">All Products</button>
                </div>
                <div id="products_display">
        
                </div>
            </div>
        </div>



<section id="footer_section"></section>
`;

let locaValue = localStorage.getItem("productsCategory");

if (locaValue == "Top_Deals" || locaValue == "fruitsNvegies") {
  document.querySelector(".leftSide").innerHTML = `
    <div class="leftdivs">
        <p style="font-size: 25px; margin: 20px 0;">Categories</p>
        <br>
        <p><i class="arrow right"></i> Fruits &amp; Vegetables</p>
        <hr>
        <p><i class="arrow right"></i> Dairy &amp; Bakery</p>
        <hr>
        <p><i class="arrow right"></i> Staples</p>
        <hr>
        <p><i class="arrow right"></i> Snacks &amp; Branded Foods</p>
        <hr>
        <p><i class="arrow right"></i> Beverages</p>
        <hr>
        <p><i class="arrow right"></i> Personal Care</p>
        <hr>
        <p><i class="arrow right"></i> Home Care</p>
        <hr>
        <p><i class="arrow right"></i> Home &amp; Kitchen</p>
        <hr>
        <p><i class="arrow right"></i> Mom &amp; Baby Care</p>
        <hr>
        <p><i class="arrow right"></i> Books</p>
        <hr>
        <p><i class="arrow right"></i> Pets</p>
    </div>
    `;
} else if (locaValue == "kitchenware") {
  document.querySelector(".leftSide").innerHTML = `
    <div class="leftdivs">
        <p style="font-size: 25px; margin: 20px 0;">Categories</p>
        <br>
        <p><i class="arrow right"></i> Kitchenware</p>
        <hr>
        <p><i class="arrow right"></i> Dining</p>
        <hr>
        <p><i class="arrow right"></i> Furnishing</p>
        <hr>
        <p><i class="arrow right"></i> Home Decor</p>
        <hr>
        <p><i class="arrow right"></i> Furniture</p>
        <hr>
        <p><i class="arrow right"></i> Home Appliances</p>
        <hr>
        <p><i class="arrow right"></i> Toys, Games &amp; Fitness</p>
        <hr>
        <p><i class="arrow right"></i> Electrical</p>
        <hr>
        <p><i class="arrow right"></i> Bathroom &amp; Laundry Accessories</p>
        <hr>
        <p><i class="arrow right"></i> Disposables</p>
        <hr>
        <p><i class="arrow right"></i> Stationery</p>
        <hr>
        <p><i class="arrow right"></i> Bags &amp; Travel Luggage</p>
        <hr>
        <p><i class="arrow right"></i> Mops, Brushes &amp; Scrubs</p>
        <hr>
        <p><i class="arrow right"></i>Auto Care</p>
        <hr>
        <p><i class="arrow right"></i> Garden &amp; Outdoor</p>
        <hr>
        <p><i class="arrow right"></i> Carpentry &amp; work accessories</p>
        <hr>
        <p><i class="arrow right"></i> Pooja Needs</p>
        <hr>
        <p><i class="arrow right"></i> Bathroom &amp; Laundry</p>
        <hr>
        <p><i class="arrow right"></i> Industrial &amp; Scientific Supplies</p>
    </div>
    `;
} else if (locaValue == "mens") {
  document.querySelector(".leftSide").innerHTML = `
    <div class="leftdivs">
        <p style="font-size: 25px; margin: 20px 0;">Categories</p>
        <br>
        <p><i class="arrow right"></i> Men</p>
        <hr>
        <p><i class="arrow right"></i> Women</p>
        <hr>
        <p><i class="arrow right"></i> Boys</p>
        <hr>
        <p><i class="arrow right"></i> Girls</p>
        <hr>
        <p><i class="arrow right"></i> Junior Boys</p>
        <hr>
        <p><i class="arrow right"></i> Infants</p>
        <hr>
        <p><i class="arrow right"></i> Toys & Baby Care</p>
    </div>
    `;
} else if (locaValue == "Electronics") {
  document.querySelector(".leftSide").innerHTML = `
    <div class="leftdivs">
        <p style="font-size: 25px; margin: 20px 0;">Categories</p>
        <br>
        <p><i class="arrow right"></i> Mobiles &amp; Tablets</p>
        <hr>
        <p><i class="arrow right"></i> TV &amp; Speaker</p>
        <hr>
        <p><i class="arrow right"></i> Home Appliances</p>
        <hr>
        <p><i class="arrow right"></i> Computers</p>
        <hr>
        <p><i class="arrow right"></i> Cameras</p>
        <hr>
        <p><i class="arrow right"></i> Kitchen Appliances</p>
        <hr>
        <p><i class="arrow right"></i>Personal Care &amp; Grooming</p>
        <hr>
        <p><i class="arrow right"></i> Smart Devices</p>
        <hr>
        <p><i class="arrow right"></i> Gaming</p>
        <hr>
        <p><i class="arrow right"></i> Accessories</p>
        <hr>
        <p><i class="arrow right"></i> Phones</p>
        <hr>
        <p><i class="arrow right"></i> Office Products</p>
        <hr>
        <p><i class="arrow right"></i> Health Care Devices</p>
    </div>
    `;
} else if (locaValue == "makeup") {
  document.querySelector(".leftSide").innerHTML = `
    <div class="leftdivs">
        <p style="font-size: 25px; margin: 20px 0;">Categories</p>
        <br>
        <p><i class="arrow right"></i> Hair</p>
        <hr>
        <p><i class="arrow right"></i> Skin Care</p>
        <hr>
        <p><i class="arrow right"></i> Fragrances</p>
        <hr>
        <p><i class="arrow right"></i> Personal Care</p>
        <hr>
        <p><i class="arrow right"></i>Mom &amp; Baby</p>
        <hr>
        <p><i class="arrow right"></i> Men's Grooming</p>
        <hr>
        <p><i class="arrow right"></i>Tools &amp; Appliances</p>
        <hr>
        <p><i class="arrow right"></i> Covid Essentials</p>
        <hr>
        <p><i class="arrow right"></i>Wellness</p>
        <hr>
        <p><i class="arrow right"></i> Fitness</p>
        <hr>
        <p><i class="arrow right"></i> Treatments</p>
    </div>
    `;
}

dishplayData2("");
async function dishplayData2(valFOR) {
  try {
    document.getElementById("products_display").innerHTML = "";
    let res = await fetch(
      `https://jsonservermasai.herokuapp.com/items?item_category=${locaValue}&_sort=${valFOR}`
    );
    let data = await res.json();

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
          <div><span class="homepage_TopDeals_part_dis_section"><span>${
            element.item_discount
          }</span>%<br>off</span></div>
          <div class="homepage_TopDeals_part_pro_detail" onclick="showSelectProductDetails(${
            element.id
          })">
              <img class="product-image-photo"
                  src="${element.item_img_url}"
                  alt="">
              <p class="clsgetname">${element.item_name.slice(0, 50)}</p>
          </div>
          <div class="homepage_TopDeals_part_price_box">
              <p class="final_price">₹ ${element.item_final_price}.00</p>
              <p class="price">M.R.P: <strike>₹ ${
                element.item_price
              }.00</strike></p>
              <p class="save_price">Save ₹ ${element.item_disc_price}.00</p>
          </div>
          <div id="homepage_TopDeals_part_Addtocart_btn"> ${buttonInt} </div>
          `;

      document.getElementById("products_display").append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
