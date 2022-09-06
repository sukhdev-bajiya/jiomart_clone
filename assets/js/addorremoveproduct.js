function updateproductValuesplus(id, val) {
  fetch(`https://masai-server.herokuapp.com/items/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      item_quantity: val + 1,
      item_addtocart: true,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (val == 1) {
    showAddtocartProductList();
  }
  pageload();
}

function updateproductValuesminus(id, val) {
  let tgfl = true;
  if (val == 1) {
    tgfl = false;
  }
  fetch(`https://masai-server.herokuapp.com/items/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      item_quantity: val - 1,
      item_addtocart: tgfl,
    }),
    headers: { "Content-Type": "application/json" },
  });
  pageload();
}

function likeProductvalue(id, val) {
  fetch(`https://masai-server.herokuapp.com/items/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      item_like: !val,
    }),
    headers: { "Content-Type": "application/json" },
  });
  pageload();
}

function showSelectProductDetails(id) {
  localStorage.setItem("selectProductIdandshowDetails", id);
  window.open("./productView.html", "_Self");
}

function pageload() {
  setTimeout(() => {
    location.reload();
  }, 500);
}
showAddtocartProductList();
async function showAddtocartProductList() {
  try {
    let res = await fetch(
      `https://masai-server.herokuapp.com/items?item_addtocart=true`
    );
    let data = await res.json();
    let totalPayment = 0;
    let savePayment = 0;
    let count = 0;
    data.forEach((element) => {
      if (element.item_quantity != 0) {
        let div = document.createElement("div");
        div.className = "mc_item";
        div.innerHTML = `
            <div class="item_name">${element.item_name.slice(0, 20)}...</div>
            <div class="item_details">₹ ${element.item_final_price}.00x${
          element.item_quantity
        }</div>
            `;
        document.getElementById("navbarCartpopup_items").append(div);
        totalPayment += element.item_final_price * element.item_quantity;
        savePayment += element.item_disc_price * element.item_quantity;
        count++;
      }
    });
    document.querySelector(".mc_amount").innerText = `₹ ${totalPayment}.00`;
    document.querySelector(
      ".mc_savings"
    ).innerHTML = `You save ₹ ${savePayment}.00`;
    document.querySelector(".items").innerHTML = `${count} item(s)`;
    document.getElementById("countOfCart").innerHTML = data.length;
  } catch (error) {
    console.log(error);
  }
}
