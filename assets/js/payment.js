function ProceedToPay() {
  let amountToPay = Number(document.getElementById("amountTotal").innerText);
  localStorage.setItem("TotalAmount", amountToPay);
  window.open("./finalPayment.html", "_Self");

  console.log(amountToPay);
}

// JS for Final Payment Page

document.querySelector("#HideButton").addEventListener("click", HideCover);
function HideCover() {
  let HideCo = document.querySelector("#qrcode_cover");
  HideCo.style.display = "none";
}

document.getElementById("SendOTPbtn").addEventListener("click", SendOTPPay);

let TotalPayment = JSON.parse(localStorage.getItem("usemakepayment")) || 1000;
function SendOTPPay() {
  document.getElementById("VerifyOTPtoPay").style.display = "block";
  document.getElementById("SendOTPbtn").style.display = "none";
  document.getElementById("EnterOTPforPay").style.display = "block";

  alert(`Your 4 dgit OTP for Payment of ${TotalPayment} is here ${1234}`);
}
