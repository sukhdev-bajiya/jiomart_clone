document.querySelector("#HideButton").addEventListener("click", HideCover);
function HideCover() {
  let HideCo = document.querySelector("#qrcode_cover");
  HideCo.style.display = "none";
  ConfirmPayment();
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
    showcartpageupdate();
  }, 5000);
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

async function showcartpageupdate() {
  try {
    let res = await fetch(
      `https://masai-server.herokuapp.com/items?item_addtocart=true`
    );
    let data = await res.json();
    document.getElementById("Successfull").style.display = "flex";
    data.forEach((element) => {
      fetch(`https://masai-server.herokuapp.com/items/${element.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          item_addtocart: false,
          item_quantity: 0,
        }),
        headers: { "Content-Type": "application/json" },
      });
    });

    setTimeout(() => {
      document.getElementById("Successfull").style.display = "none";
      window.open("./index.html", "_Self");
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}
