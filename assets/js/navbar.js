shownavbar();
function shownavbar() {
  document.getElementById("navabar_section").innerHTML = `
<!--===================== Upper half of navabar  ===========================-->

    <div id="nav-top">
      <!-- <div></div> -->
      <div id="logosM">
        <i class="fa-solid fa-bars" id="slider_Menu_BTN" onclick="ShowSideSliderMenu()"></i>
        <a href="./index.html">
          <img src="https://www.jiomart.com/assets/version1659035733/smartweb/images/jiomart_logo_beta.svg" alt="" />
        </a>
      </div>

      <div id="search-div">
        <input id="search" type="text" placeholder="Search essentials, groceries, and more …" />
        <button><i class="fa-solid fa-list"></i></button>
        <div id="search_div_results"> </div>
      </div>

      <!--============== before Login ============================= -->   

        <div id="login-div">
          <a href="./signup.html">
            <i class="fa-solid fa-user"></i>
            <span>Sign in / Sign up</span>
          </a>
        </div>

 <!--============== After Login ======== 62 to 69 ===================== -->

        <div id="after_login_div">
          <a href="./useraccount.html">
            <i class="fa-solid fa-circle-user"></i>
            <span id="yourNameAfterLogin_in_navbar">Ayush</span>
          </a>
        </div>

      <div id="cart-div">
        <a href="./cartpage.html">
          <i class="fa-solid fa-cart-shopping"></i>
          <span id="countOfCart">0</span>
          <span>Cart</span>
        </a>
        <div class="cartpopup_container">
            <span class="trishalCartcontainer"></span>
            <div class="mc_title">
                <h2>Order Summary</h2><span class="items">0 item(s)</span>
            </div>
            <div class="cartpopup_items" id="navbarCartpopup_items">
            </div>
            <div class="mc_footer">
                <div class="mc_price">
                    <div class="mc_amount"></div>
                    <div class="mc_savings"></div>
                </div><button class="mc_cartBtn btn-ripple" type="button">PROCEED TO CART</button>
            </div>
        </div>
      </div>
    </div>

    <!--======================== lower half of navabar ==========================-->

    <div id="nav-bottom">
      <div id="nav-bottom-options">

        <div id="location-option-div" onclick="ShowlocationPopup()">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <p>Deliver to</p>
            <p id="pincode">400001</p>
          </div>
        </div>

        <div id="Groceries-option">
          <a>
            <h4 onclick="showAllProductsInNewPage('Top_Deals')">Groceries</h4>
          </a>
          <i class="fa-solid fa-chevron-down" class="arrowUp"></i>
          <div id="Groceries-dropdown">
            <ul class="navigation_submenu">
              <li>
                <a onclick="showAllProductsInNewPage('fruitsNvegies')">Fruits &amp; Vegetables</a>
              </li>
              <li>
                <a>Dairy &amp; Bakery</a>
              </li>
              <li>
                <a>Staples</a>
              </li>
              <li>
                <a>Snacks &amp; Branded Foods</a>
              </li>
              <li>
                <a>Beverages</a>
              </li>
              <li>
                <a>Personal Care</a>
              </li>
              <li>
                <a>Home Care</a>
              </li>
              <li>
                <a>Home &amp; Kitchen</a>
              </li>
              <li>
                <a>Mom &amp; Baby Care</a>
              </li>
              <li>
                <a>Books</a>
              </li>
              <li>
                <a>Pets</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="premiumfruits-option">
          <a>
            <h4>Premium Fruits</h4>
          </a>
          <i class="fa-solid fa-chevron-down"></i>
          <div id="premiumfruits-dropdown">
            <ul class="navigation_submenu">
              <li>
                <a>Apples &amp; Pears</a>
              </li>
              <li>
                <a>Avocado, Peach, Plum</a>
              </li>
              <li>
                <a>Banana, Melons &amp; Coconut</a>
              </li>
              <li>
                <a>Cherries, Berries &amp; Exotic Fruits</a>
              </li>
              <li>
                <a>Citrus, Mango &amp; Grapes</a>
              </li>
              <li>
                <a>Dates</a>
              </li>
              <li>
                <a>Gift, Assorted &amp; XL Packs</a>
              </li>
              <li>
                <a>Pomegranate, Papaya &amp; Pineapple</a>
              </li>
              <li>
                <a>Seasonal &amp; Minor Fruits</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="homekitchen-option">
          <a>
            <h4 onclick="showAllProductsInNewPage('kitchenware')">Home & Kitchen</h4>
          </a>
          <i class="fa-solid fa-chevron-down"></i>
          <div id="homekitchen-dropdown">
            <ul class="navigation_submenu">
              <li>
                <a onclick="showAllProductsInNewPage('kitchenware')">Kitchenware</a>
              </li>
              <li>
                <a>Dining</a>
              </li>
              <li>
                <a>Furnishing</a>
              </li>
              <li>
                <a>Home Decor</a>
              </li>
              <li>
                <a>Furniture</a>
              </li>
              <li>
                <a>Home Appliances</a>
              </li>
              <li>
                <a>Toys, Games &amp; Fitness</a>
              </li>
              <li>
                <a>Electrical</a>
              </li>
              <li>
                <a>Bathroom &amp; Laundry Accessories</a>
              </li>
              <li>
                <a>Disposables</a>
              </li>
              <li>
                <a>Stationery</a>
              </li>
              <li>
                <a>Bags &amp; Travel Luggage</a>
              </li>
              <li>
                <a>Mops, Brushes &amp; Scrubs</a>
              </li>
              <li>
                <a>Auto Care</a>
              </li>
              <li>
                <a>Garden &amp; Outdoor</a>
              </li>
              <li>
                <a>Carpentry &amp; work accessories</a>
              </li>
              <li>
                <a>Pooja Needs</a>
              </li>
              <li>
                <a>Bathroom &amp; Laundry</a>
              </li>
              <li>
                <a>Industrial &amp; Scientific Supplies</a>
              </li>
              <li>
                <a>Power &amp; Hand Tools</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="fashion-option">
          <a>
            <h4 onclick="showAllProductsInNewPage('mens')">Fashion</h4>
          </a>
          <i class="fa-solid fa-chevron-down"></i>
          <div id="fashion-dropdown">
            <ul class="navigation_submenu">
              <li>
                <a onclick="showAllProductsInNewPage('mens')">Men</a>
              </li>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>Boys</a>
              </li>
              <li>
                <a>Girls</a>
              </li>
              <li>
                <a>Junior Boys</a>
              </li>
              <li>
                <a>Infants</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="electronics-option">
          <a>
            <h4 onclick="showAllProductsInNewPage('Electronics')">Electronics</h4>
          </a>
          <i class="fa-solid fa-chevron-down"></i>
          <div id="electronics-dropdown">
            <ul class="navigation_submenu">
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Mobiles &amp; Tablets</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">TV &amp; Speaker</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Home Appliances</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Computers</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Cameras</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Kitchen Appliances</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Personal Care &amp; Grooming</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Smart Devices</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Gaming</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Accessories</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Phones</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Office Products</a>
              </li>
              <li>
                <a onclick="showAllProductsInNewPage('Electronics')">Health Care Devices</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="beauty-option">
          <a>
            <h4 onclick="showAllProductsInNewPage('makeup')">Beauty</h4>
          </a>
          <i class="fa-solid fa-chevron-down"></i>
          <div id="beauty-dropdown">
            <ul class="navigation_submenu">
              <li>
                <a onclick="showAllProductsInNewPage('makeup')">Make-Up</a>
              </li>
              <li>
                <a>Hair</a>
              </li>
              <li>
                <a>Skin Care</a>
              </li>
              <li>
                <a>Fragrances</a>
              </li>
              <li>
                <a>Personal Care</a>
              </li>
              <li>
                <a>Mom &amp; Baby</a>
              </li>
              <li>
                <a>Men's Grooming</a>
              </li>
              <li>
                <a>Tools &amp; Appliances</a>
              </li>
              <li>
                <a>Covid Essentials</a>
              </li>
              <li>
                <a>Wellness</a>
              </li>
              <li>
                <a>Fitness</a>
              </li>
              <li>
                <a>Treatments</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="jwellery-option">
          <a>
            <h4>Jewellery</h4>
          </a>
          <i class="fa-solid fa-chevron-down"></i>
          <div id="jwellery-dropdown">
            <ul class="navigation_submenu">
              <li>
                <a>Fine Jewellery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
`;
  document.getElementById("location_popup_section").innerHTML = `
<div id="location_popup">
      <div class="triangle"></div>
      <div id="location_popup_div">
        <div class="location_popup_upper">
          <div class="whereDoYouwant">
            <h3>Where do you want the delivery?</h3>
            <span onclick="HidelocationPopup()" class="location_close_btn">X</span>
          </div>
          <!--===================== part 1 Before Login ========================-->

          <div class="where_address_div" id="where_address_div">
            <h5>Get access to your Addresses, Orders, and Wishlist</h5>
            <button>Sign in to see Your Addresses</button>
          </div>

          <!--  ========= part 2 After Login ==================================

          <div class="my_address_div" id="my_address_div">
            <h4 id="my_address_part_username>Ayush</h4>
            <h4>825409</h4>
            <p>13/17, Tara Tand </p>
            <p>Koderma, Jharkhand</p>
            <button>Default Address</button>
          </div>
        </div>-->

        <div class="location_popup_lower">
          <h3>Or Enter Pincode</h3>
          <h5>Select pincode to see product availability.</h5>
          <div class="enter_pincode_div">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" id="pincodeFromPopUp" maxlength="6" minlength="6" placeholder="Enter your Pincode">
            <button onclick="pincodeFromPopUpUpdatevaleinlocal()">Apply</button>
          </div>
          <span><i id="locationToBeShown"></i></span>
          <div class="detect_loc_mark">
            <i class="fa-solid fa-location-crosshairs"></i>
            <h4>DETECT MY LOCATION</h4>
          </div>

        </div>

      </div>

    </div>
`;

  document.getElementById("slide_menu_slider_section").innerHTML = `
<div id="slide_menu_slider">

      <div class="HelloName">
        <div class="OnlyHelloName">
          <div>
            <i class="fa-solid fa-circle-user"></i>
            <h3>Hello </h3>
            <h3 id="nameshowAfterLoginSlidebar">User</h3>
          </div>
          <p id="CloseSlideMenuSlider" onclick="CloseSlideMenuSlider()">X</p>
        </div>

        <div class="HelloNameBtns">
          <a href="./useraccount.html">Account</a>
          <a href="./cartpage.html">Orders</a>
        </div>
      </div>

      <div class="Slider_Content_Option">
        <div class="slider_home_option">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop by Category</a>
            </li>
            <li>
              <a href="/">My List</a>
            </li>
            <li>
              <a href="/">JioMart Wallet</a>
            </li>
            <li>
              <a href="/">JioMart Gift Store</a>
            </li>
            <li>
              <a href="/">JioMart Gift Card</a>
            </li>
            <li>
              <a href="/">GoGreen with JioMart</a>
            </li>
            <li>
              <a href="/">All Offers</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="./useraccount.html">My Account</a>
            </li>
            <li>
              <a href="/">Need Help</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Guide</a>
            </li>
            <li></li>
          </ul>
        </div>


        <div class="ContactUsinsideSlider">
          <div>
            <h3>CONTACT US</h3>
            <p>WhatsApp us : <span>70003 70003</span></p>
            <p>Call Us : <span>1800 890 1222</span></p>
            <p>
              Please note that you are accessing the BETA Version of
              <span> www.jiomart.com</span>
            </p>
            <p>
              Should you encounter any bugs, glitches, lack of functionality,
              delayed deliveries, billing errors or other problems on the beta
              website, please email us on <span>cs@jiomart.com </span>
            </p>
          </div>
          <div>
            <h3>DOWNLOAD APP</h3>
            <div class="ContactUsinsideSliderImg">
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/play_store-057f9061b4cd0fd4953a485569c15e63fdf8d89b0bcc025c04cfb34d9e8cd571.png"
                alt="" />
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/app_store-4407bc8ced0d52a50ff042ce51e32d51de3e11717955798ec54c6a28e7926c7c.png"
                alt="" />
            </div>
          </div>
        </div>


      </div>

    </div>
`;

  document.getElementById("footer_section").innerHTML = `
<footer>
      <ul>
        <li>
          <h3>MOST POPULAR CATEGORIES</h3>
        </li>
        <li>
          <a>Staples</a>
        </li>
        <li>
          <a>Beverages</a>
        </li>
        <li>
          <a>Personal Care</a>
        </li>
        <li>
          <a>Home Care</a>
        </li>
        <li>
          <a>Fruits and Vegetables</a>
        </li>
        <li>
          <a>Baby Care</a>
        </li>
        <li>
          <a>Snacks & Branded Foods</a>
        </li>
        <li>
          <a>Dairy & Bakery</a>
        </li>
      </ul>

      <ul>
        <li>
          <h3>CUSTOMER SERVICES</h3>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
        <li>
          <a>Terms and conditions</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>E-waste policy</a>
        </li>
        <li>
          <a>Cancellation and return policy</a>
        </li>
      </ul>

      <div class="ContactUs">
        <div>
          <h3>CONTACT US</h3>
          <p>WhatsApp us : <span>70003 70003</span></p>
          <p>Call Us : <span>1800 890 1222</span></p>
          <p>
            Please note that you are accessing the BETA Version of
            <span> www.jiomart.com</span>
          </p>
          <p>
            Should you encounter any bugs, glitches, lack of functionality,
            delayed deliveries, billing errors or other problems on the beta
            website, please email us on <span>cs@jiomart.com </span>
          </p>
        </div>
        <div>
          <h3>DOWNLOAD APP</h3>
          <div>
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/play_store-057f9061b4cd0fd4953a485569c15e63fdf8d89b0bcc025c04cfb34d9e8cd571.png"
              alt="" />
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/app_store-4407bc8ced0d52a50ff042ce51e32d51de3e11717955798ec54c6a28e7926c7c.png"
              alt="" />
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <p>
        Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+,
        Google Chrome 80+
      </p>
      <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
    </div>
`;
}

//// ============== Check Login or not ===================================== ///

// setInterval(function () {
//   if (false) {
//     document.getElementById("where_address_div").style.display = "none";
//     document.getElementById("my_address_div").style.display = "block";
//   } else {
//     document.getElementById("where_address_div").style.display = "block";
//     document.getElementById("my_address_div").style.display = "none";
//   }
// }, 200);

///============== JS FOR LOCATION  POPUP =================== \\

function ShowlocationPopup() {
  document.getElementById("location_popup_section").style.display = "block";
}

function HidelocationPopup() {
  document.getElementById("location_popup_section").style.display = "none";
}

///============== JS FOR Slider Menu =================== \\

function ShowSideSliderMenu() {
  document.getElementById("slide_menu_slider_section").style.display = "block";
  document.getElementById("slide_menu_slider_section").style.width = "100%";
}

function CloseSlideMenuSlider() {
  document.getElementById("slide_menu_slider_section").style.display = "none";
}

document
  .getElementById("pincodeFromPopUp")
  .addEventListener("keyup", getLocation);
let pincodeSpan = document.getElementById("locationToBeShown");

async function getLocation(e) {
  try {
    let pincode = document.getElementById("pincodeFromPopUp");
    if (pincode.value.length == 6) {
      let res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode.value}`
      );
      let data = await res.json();

      DisplayPinCode(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
}

function DisplayPinCode(data) {
  pincodeSpan.innerText = "";
  if (data.PostOffice) {
    let LocationOfPin = data.PostOffice[0];
    pincodeSpan.innerText = `${LocationOfPin.District}, ${LocationOfPin.State}`;
  } else {
    pincodeSpan.innerText = data.Message;
  }
}

function pincodeFromPopUpUpdatevaleinlocal() {
  localStorage.setItem(
    "userpincodelocal",
    document.getElementById("pincodeFromPopUp").value
  );
  document.getElementById("pincode").innerText =
    document.getElementById("pincodeFromPopUp").value;
  HidelocationPopup();
}
document.getElementById("pincode").innerText =
  localStorage.getItem("userpincodelocal");
if (document.getElementById("pincode").innerText == "") {
  document.getElementById("pincode").innerText = "302034";
}

checkuserdata();
async function checkuserdata() {
  try {
    let userndata = localStorage.getItem("userNumberOndata");
    let res = await fetch(
      `https://jsonservermasai.herokuapp.com/jiomartuserdata?user_number=${userndata}`
    );
    let data = await res.json();
    if (data.length == 1) {
      document.getElementById("login-div").style.display = "none";
      document.getElementById("after_login_div").style.display = "block";
      document.getElementById("where_address_div").style.display = "none";
      // document.getElementById("my_address_div").style.display = "block";

      document.getElementById("yourNameAfterLogin_in_navbar").innerHTML =
        data[0].user_fname || "User";
      document.getElementById("nameshowAfterLoginSlidebar").innerHTML =
        data[0].user_fname || "User";
    } else {
      document.getElementById("login-div").style.display = "block";
      document.getElementById("after_login_div").style.display = "none";
      document.getElementById("where_address_div").style.display = "block";
      // document.getElementById("my_address_div").style.display = "none";
      localStorage.setItem("jiomartUserNotLogin", false);
    }
  } catch (error) {
    console.log(error);
  }
}

function showAllProductsInNewPage(val) {
  console.log(val);
  localStorage.setItem("productsCategory", val);
  window.open("./showallproduct.html", "_Self");
}

document
  .getElementById("search")
  .addEventListener("keyup", searchDivResultsInAll);

async function searchDivResultsInAll() {
  try {
    document.getElementById("search_div_results").style.display = "block";
    let val = document.getElementById("search").value;
    document.getElementById("search_div_results").innerHTML = "";
    let res = await fetch(
      `https://jsonservermasai.herokuapp.com/items?item_name_like=${val}`
    );
    console.log(
      `https://jsonservermasai.herokuapp.com/items?item_name_like=${val}`
    );
    let data = await res.json();
    let as = 5;
    if (data.length < 5) {
      as = data.length;
    }
    for (let i = 0; i < as; i++) {
      let p = document.createElement("p");
      p.addEventListener("click", () => {
        localStorage.setItem("selectProductIdandshowDetails", data[i].id);
        window.open("./productView.html", "_Self");
      });
      p.innerHTML = `${data[i].item_name.slice(0, 50)}...`;
      document.getElementById("search_div_results").append(p);
    }
    setTimeout(() => {
      document.getElementById("search_div_results").style.display = "none";
    }, 5000);
  } catch (error) {
    console.log(error);
  }
}
document.getElementById("search_div_results").style.display = "none";
