document.body.innerHTML = `
<section id="navabar_section"></section>
<section id="location_popup_section"></section>
<section id="slide_menu_slider_section"></section>

<section id="Account_Section_Parent"></section>
<section id="WishListSection">
  <div class="ListButtons">
    <button>My List </button>
    <button>WishList</button>
    <button>Legal Information</button>
    <button>Need Help</button>
    <button>Contact Us</button>
    <button>Logout</button>
  </div>
</section>

<section id="UpdateAddress_PopUp_section">
  <div id="UpdateAddress_PopUp">
    <button id="ClosePopBtn_address" onclick="ClosePopBtn_address()">X</button>
    <div id="UpdateAddress">
      <p>EDIT PROFILE</p>
      <form id="profileUpdateForm">
        <label>First Name</label>
        <input type="text" id="firstName" placeholder="Enter your first name">
        <label>Last Name</label>
        <input type="text" id="lastName" placeholder="Enter your last name">
        <label>Gender</label>
        <select name="" id="genderSelect">
          <option value="">select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        <option value="other">Other</option>
        </select>
        <label>Date Of Birth</label>
        <input type="date" id="dobofuser">      
        <label>Email ID</label>
        <input type="email" id="email" placeholder="Enter your email address">
        <label>Phone Number</label>
        <input type="number" id="usermobilenumber" placeholder="Enter your mobile number" value="${localStorage.getItem(
          "userNumberOndata"
        )}">
        <label>Address</label>
        <input type="text" id="userAddress" placeholder="Enter your delivery address">
        <label>Pincode</label>
        <input type="number"id="userAddressPincode" placeholder="Enter your delivery pincode">

        <input type="submit">
      </form>
    </div>
  </div>
</section>
<section id="footer_section"></section>
`;

dataShowUserAccount();
async function dataShowUserAccount() {
  let userndata = localStorage.getItem("userNumberOndata");
  let res = await fetch(
    `https://jsonservermasai.herokuapp.com/jiomartuserdata?user_number=${userndata}`
  );
  let data = await res.json();

  document.getElementById("Account_Section_Parent").innerHTML = `

<h1 class="my_acc_heading">My Account</h1>
<div id="Account_Section">

<!-- 
HTML for Payment  info Div     -->       

  <div id="Payment_Account_div">
    <div>
      <div id="Payment_Account_1">
        <div>
          <img
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-user-circle-thin.png&r=0&g=0&b=0"
            class="userImage"
          />
        </div>
        <div class="userDetails_account">
          <h2>${data[0].user_fname}</h2>
          <p class="dullBlue">${data[0].user_email}</p>
          <p class="dullBlue">
            +91-<span class="phoneNoPaymentDiv">${data[0].user_number}</span>
          </p>
        </div>
      </div>

      <div id="Payment_Account_2">
        <div>
          <button>
            <span>
              
              <i class="fa-solid fa-credit-card"></i></span>
            Payment Methods
          </button>
          <button>
            <span
              <i class="fa-solid fa-rectangle-list"></i></span>
            Order History
          </button>
        </div>
        <div>
          <button>
            <span><i class="fa-solid fa-location-dot"></i></span> Delivery
            Addresses
          </button>
        </div>
      </div>
    </div>
  </div>
<!-- 
HTML for Account info Div     -->

  <div id="Info_Account_div">
        <div class="heading_of_account_info">
        <h2>Account Information</h2>
        <button onclick="ShowChangeAddressPop()" class="editAddress">EDIT</button>
        </div>

        <div id="All_Info_Data">

          <div id="All_Info_Data_1">
            <div>
              <p class="dullgrey">Full Name</p>
              <h3>${data[0].user_name}</h3>
              
            </div>
             <div>
              <p class="dullgrey">Email id</p>
              <h3>${data[0].user_email}</h3>
            </div>
          

          </div>

          <div id="All_Info_Data_2">
             <div>
              <p class="dullgrey">AGE</p>
              <h3>${data[0].user_dathofbirth}</h3
            </div>
             <div>
              <p class="dullgrey">Mobile Number</p>
              <h3>+91-<span>${data[0].user_number}</span></h3
            </div>
             <div>
              <p class="dullgrey">Default Address</Address></p>
              <h3>${data[0].user_address}, ${data[0].user_pincode}</h3>
            </div>

          </div>

        </div>
  </div>
</div>
`;
}

function ClosePopBtn_address() {
  document.getElementById("UpdateAddress_PopUp_section").style.display = "none";
}

function ShowChangeAddressPop() {
  document.getElementById("UpdateAddress_PopUp_section").style.display =
    "block";
}
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let userndata = localStorage.getItem("userNumberOndataID");
  let fname = document.getElementById("firstName").value;
  let lname = document.getElementById("lastName").value;
  let genderSelect = document.getElementById("genderSelect").value;
  let dobofuser = document.getElementById("dobofuser").value;
  let email = document.getElementById("email").value;
  let usermobilenumber = document.getElementById("usermobilenumber").value;
  let userAddress = document.getElementById("userAddress").value;
  let userAddressPincode = document.getElementById("userAddressPincode").value;
  localStorage.setItem("userpincodelocal", userAddressPincode);
  fetch(`https://jsonservermasai.herokuapp.com/jiomartuserdata/${userndata}`, {
    method: "PATCH",
    body: JSON.stringify({
      user_fname: fname,
      user_lname: lname,
      user_name: fname + " " + lname,
      user_number: usermobilenumber,
      user_email: email,
      user_dathofbirth: dobofuser,
      user_gender: genderSelect,
      user_address: userAddress,
      user_pincode: userAddressPincode,
    }),
    headers: { "Content-Type": "application/json" },
  });
  ClosePopBtn_address();
  dataShowUserAccount();
});
