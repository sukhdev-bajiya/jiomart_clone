// JS for Final Payment Page

document.querySelector("#HideButton").addEventListener("click", HideCover);
function HideCover() {
  let HideCo = document.querySelector("#qrcode_cover");
  HideCo.style.display = "none";
}

document
  .getElementById("UPIconfirmBtn")
  .addEventListener("click", ConfirmPayment);

function ConfirmPayment() {
  document.getElementById("UPIconfirmBtn").style.display = "none";
  document.getElementById("EnterUPIid").disabled = "true";
  document.getElementById("waitingforPayment").style.display = "block";

  let i = 5;
  let seted = setInterval(() => {
    document.getElementById(
      "waitingforPayment"
    ).innerHTML = `Waiting for Payment Confirmation... ${i--} Sec`;
    if (i == 0) {
      clearInterval(seted);
      document.getElementById("waitingforPayment").style.display = "none";
    }
    document.getElementById("waitingforPayment").style.color = "grey";
  }, 1000);
  setTimeout(() => {
    ShowAlertOfPaymentSuccessfull();
  }, 5000);
}

function ShowAlertOfPaymentSuccessfull() {
  document.getElementById("Successfull").style.display = "flex";
  setTimeout(() => {
    document.getElementById("Successfull").style.display = "none";
    window.open("../index.html", "_Self");
  }, 2000);
}

document.getElementById("EnterUPIid").addEventListener("keyup", ConvertToBlue);

function ConvertToBlue() {
  let inp = document.getElementById("EnterUPIid").value;
  console.log(inp);
  document.getElementById("UPIconfirmBtn").style.backgroundColor = "#1b5e9d8f";
  document.getElementById("UPIconfirmBtn").disabled = true;
  document.getElementById("UPIconfirmBtn").style.color = "white";
  if (inp.length >= 1) {
    document.getElementById("UPIconfirmBtn").disabled = false;
    document.getElementById("UPIconfirmBtn").style.backgroundColor = "#004584";
    document.getElementById("UPIconfirmBtn").style.color = "white";
  }
}
