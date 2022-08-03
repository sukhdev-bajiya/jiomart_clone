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
