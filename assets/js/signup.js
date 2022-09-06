document.body.innerHTML = `
<section id="navabar_section"></section>
<section id="location_popup_section"></section>
<section id="slide_menu_slider_section"></section>

<section id="signupSection_container">
    <div class="signup_container">
        <img src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="">
        <div class="signup_container_rightpart1">
            <h1>Sign in</h1>
            <p>Sign in to access your Orders, Offers and Wishlist.</p>
            <div>
                <span>+91</span>
                <input type="number" onkeyup="checkMobilenumber1()" id="userMobileNumber1"
                    placeholder="Enter your mobile no">
            </div>
            <p id="inputMobilenumberAlert1" style="margin: -30px 0 25px 0;"></p>
            <div>
                <input type="number" id="usersigninotp1" placeholder="Enter your 4 digit otp">
            </div>
            <p id="inputMobilenumberAlert2" style="margin: -30px 0 25px 0;"></p>
            <button id="gotoOtpPartinSignup1"><img
                    src="https://www.jiomart.com/msassets/images/icons/arrow_forward.svg" style="height: 31px;"
                    alt=""></button>
        </div>
    </div>
    <p class="signup_footer_section">By continuing you agree to our <span>Terms of service</span> <br>
        and <span>Privacy & Legal Policy.</span></p>
</section>


<section id="footer_section"></section>
`;

var otpforUser;
function checkMobilenumber1() {
  if (document.getElementById("userMobileNumber1").value.length == 10) {
    document
      .getElementById("inputMobilenumberAlert1")
      .setAttribute("onclick", "gotoOtpPartinSignupstep1()");
    document.getElementById("inputMobilenumberAlert1").innerHTML = "Send OTP";
    document.getElementById("inputMobilenumberAlert1").style.color = "green";
    document.getElementById("inputMobilenumberAlert1").style.cursor = "pointer";
  } else {
    document.getElementById("inputMobilenumberAlert1").innerHTML =
      "Please enter 10 digit number.";
    document.getElementById("inputMobilenumberAlert1").style.color = "red";
  }
}

function gotoOtpPartinSignupstep1() {
  otpforUser = Math.floor(Math.random() * 1000 + 1000);
  alert(`Your one time OTP is ${otpforUser}`);
  document.getElementById("usersigninotp1").style.display = "block";
  document.getElementById("inputMobilenumberAlert1").style.display = "none";
  document
    .getElementById("gotoOtpPartinSignup1")
    .setAttribute("onclick", "gotoOtpPartinSignupstep2()");
  resendotpfun();
}
function resendotpfun() {
  setTimeout(() => {
    clearInterval(seted);
    document.getElementById("inputMobilenumberAlert2").innerHTML =
      "For resend otp click on Send OTP";
    document.getElementById("inputMobilenumberAlert1").style.display = "block";
  }, 6000);
  let i = 5;
  let seted = setInterval(() => {
    document.getElementById(
      "inputMobilenumberAlert2"
    ).innerHTML = `Waiting for OTP... ${i--} Sec`;
    document.getElementById("inputMobilenumberAlert2").style.color = "gray";
  }, 1000);
}
function gotoOtpPartinSignupstep2() {
  let otp = document.getElementById("usersigninotp1").value;
  if (otpforUser == otp) {
    let userndata = document.getElementById("userMobileNumber1").value;
    checkuserallreadyLoginornot(userndata);
  } else {
    alert("Please enter valid opt");
  }
}
async function checkuserallreadyLoginornot(userndata) {
  try {
    let res = await fetch(
      `https://masai-server.herokuapp.com/jiomartuserdata?user_number=${userndata}`
    );
    let data = await res.json();
    console.log(data);
    if (data.length == 0) {
      fetch("https://masai-server.herokuapp.com/jiomartuserdata", {
        method: "POST",
        body: JSON.stringify({
          user_number: userndata,
          user_fname: "Guest",
        }),
        headers: { "Content-Type": "application/json" },
      });
      alert("Signup successful");
      window.open("./signup.html", "_Self");
    } else {
      localStorage.setItem("jiomartUserNotLogin", true);
      localStorage.setItem("userNumberOndata", userndata);
      localStorage.setItem("userNumberOndataID", data[0].id);
      alert("Login successful");
      window.open("./useraccount.html", "_Self");
    }
  } catch (error) {
    console.log(error);
  }
}
