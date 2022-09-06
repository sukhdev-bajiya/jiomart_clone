// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++

document.body.innerHTML = `
<section id="navabar_section"></section>
<section id="location_popup_section"></section>
<section id="slide_menu_slider_section"></section>
<section id="homepage_top_slider_part"></section>
<section id="homepage_top__part_all_category"></section>
<section id="homepage_top_Shop_from_Top_Categories_part"></section>
<section id="homepage_top_hollyday_part_all_category"></section>
<section id="homepage_TopDeals_part_all_category"></section>
<section id="homepage_bank_and_paytm_add_part"></section>
<section id="homepage_Offersondailyessentials_part" class="homepage_boxwithhad_part"></section>
<section id="homepage_Shopbycategorieso_part"></section>
<section id="homepage_WomensFashiontwo_part"></section>
<section id="homepage_WomensFashionallproduct_part"></section>
<section id="homepage_OffersonPersonalcareallproduct_part"></section>
<section id="homepage_OffersonHousehold_Personalcareallproduct_part" class="homepage_boxwithhad_part"></section>
<section id="homepage_OffersonHouseholdallproduct_part"></section>
<section id="homepage_OffersonGroceriesallproduct_part" class="homepage_boxwithhad_part"></section>
<section id="homepage_HottestDealsallproduct_part"></section>
<section id="homepage_KidsFashionallproduct_part"></section>
<section id="homepage_MensFashiontwo_part"></section>
<section id="homepage_MensFashionallproduct_part"></section>
<section id="homepage_homeCitiPart1_part"></section>
<section id="homepage_homeCitiPart2_part"></section>
<section id="footer_section"></section>
`;

dishplayData();
dishplayData1();
async function dishplayData() {
  try {
    let res = await fetch("https://masai-server.herokuapp.com/homepageData");
    let data = await res.json();

    dishplayDatahompagecontant(data);
  } catch (error) {
    console.log(error);
  }
}
let slideIndex;
function dishplayDatahompagecontant(itemsArryList) {
  // Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_topslider = itemsArryList.homepage_topslider;
  siahplay_homepage_topslider();
  function siahplay_homepage_topslider() {
    document.getElementById("homepage_top_slider_part").innerHTML = `
<div class="homePage-topslideshow-container">
    <div class="homePage-topslideshow-images-container">
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
    </div>
    <div class="homePage-topslideshow-dots-container"> </div>
</div>
`;

    homepage_topslider.forEach((element, index) => {
      let div = document.createElement("div");
      div.className = "homePage-topslideshow-image";
      div.innerHTML = ` <img src="${element}"style="width:100%"> `;
      document
        .querySelector(".homePage-topslideshow-images-container")
        .append(div);
      let span = document.createElement("span");
      span.className = "dot";
      span.setAttribute("onclick", `currentSlide(${index + 1})`);
      document
        .querySelector(".homePage-topslideshow-dots-container")
        .append(span);
    });
  }

  slideIndex = 1;
  showSlides(slideIndex);
  setInterval(() => {
    plusSlides(1);
  }, 5000);

  // Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_top__part_all_categoryArray = itemsArryList.homepage01;
  homepage_top__part_all_categoryArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    document.getElementById("homepage_top__part_all_category").append(img);
  });

  // Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++

  let homepage_top_Shop_from_Top_Categories_partArray =
    itemsArryList.Shop_from_Top_Categories;
  document.getElementById(
    "homepage_top_Shop_from_Top_Categories_part"
  ).innerHTML = `
<h1 style="padding: 20px 0 20px 50px;">Shop from Top Categories</h1>
<div class="homepage_top_Shop_from_Top_Categories_part_container">
  <div class="homepage_sliderLiftRightarrow_images_container">
      <a class="prev" onclick="homepage_top_Shop_from_Top_Categories_part_iteamsslide('left')"></a>
      <a class="next" onclick="homepage_top_Shop_from_Top_Categories_part_iteamsslide('right')"></a>
  </div>
<div class="homepage_top_Shop_from_Top_Categories_part_iteams "> </div>
</div>
    `;
  homepage_top_Shop_from_Top_Categories_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;

    document
      .querySelector(".homepage_top_Shop_from_Top_Categories_part_iteams")
      .append(img);
  });

  // Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_top_hollyday_part_all_categoryArray = itemsArryList.homepage02;

  homepage_top_hollyday_part_all_categoryArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    document
      .getElementById("homepage_top_hollyday_part_all_category")
      .append(img);
  });

  // Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_bank_and_paytm_add_partArray = itemsArryList.homepage03;

  document.getElementById("homepage_bank_and_paytm_add_part").innerHTML = `
<div class="homepage_bank_and_paytm_add_part_container">
  <div class="homepage_sliderLiftRightarrow_images_container">
      <a class="prev" onclick="homepage_bank_and_paytm_add_part_iteamsslide('left')"></a>
      <a class="next" onclick="homepage_bank_and_paytm_add_part_iteamsslide('right')"></a>
  </div>
<div class="homepage_bank_and_paytm_add_part_iteams"> </div>
</div>
    `;

  homepage_bank_and_paytm_add_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;

    document
      .querySelector(".homepage_bank_and_paytm_add_part_iteams")
      .append(img);
  });
  setInterval(() => {
    homepage_bank_and_paytm_add_part_iteamsslide("right");
  }, 5000);

  // Part - Offers on daily essentials +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers on daily essentials  +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers on daily essentials  +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers on daily essentials  +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_Offersondailyessentials_part_itemsArray =
    itemsArryList.Offers_on_daily_essentials;
  document.getElementById("homepage_Offersondailyessentials_part").innerHTML = `
<h1>Offers on daily essentials </h1>
<div class="homepage_boxwithhad_part_items homepage_Offersondailyessentials_part_items"></div>
`;

  homepage_Offersondailyessentials_part_itemsArray.forEach((element) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <span>UP TO <span>${element.off_set}</span> OFF</span>
    <div>
        <img src="${element.img_url}" alt="">
        <p>${element.name}</p>
    </div>
    `;
    document
      .querySelector(".homepage_Offersondailyessentials_part_items")
      .append(div);
  });

  // Part - Shop by categories +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Shop by categories +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Shop by categories +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Shop by categories +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_Shopbycategorieso_partArray = itemsArryList.Shop_by_categories;

  document.getElementById("homepage_Shopbycategorieso_part").innerHTML = `
<h1 style="padding: 20px 0 20px 50px;">Shop by categories</h1>
<div class="homepage_Shopbycategorieso_part_container">
  <div class="homepage_sliderLiftRightarrow_images_container">
      <a class="prev" onclick="homepage_Shopbycategorieso_part_iteamsslide('left')"></a>
      <a class="next" onclick="homepage_Shopbycategorieso_part_iteamsslide('right')"></a>
  </div>
<div class="homepage_Shopbycategorieso_part_iteams"> </div>
</div>
    `;

  homepage_Shopbycategorieso_partArray.forEach((element) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <img src="${element.img_url}" alt="">
    <p>${element.name}</p>
  `;

    document
      .querySelector(".homepage_Shopbycategorieso_part_iteams")
      .append(div);
  });
  // Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_WomensFashiontwo_partArray = itemsArryList.Women_s_Fashion;
  document.getElementById("homepage_WomensFashiontwo_part").innerHTML = `
  <div class="homepage_bottam_box_twoImagebyRound_part_items homepage_WomensFashiontwo_part_iteams"></div>
  `;
  homepage_WomensFashiontwo_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    let div = document.createElement("div");
    div.append(img);
    document
      .querySelector(".homepage_WomensFashiontwo_part_iteams")
      .append(div);
  });

  // Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_WomensFashionallproduct_partArray =
    itemsArryList.Women_s_Fashion_items;
  document.getElementById("homepage_WomensFashionallproduct_part").innerHTML = `
  <div class="homepage_bottam_box_fiveImagebyRound_part_items homepage_WomensFashionallproduct_part_iteams"></div>
  `;
  homepage_WomensFashionallproduct_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    let div = document.createElement("div");
    div.append(img);
    document
      .querySelector(".homepage_WomensFashionallproduct_part_iteams")
      .append(div);
  });

  // Part - 05 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 05 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 05 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 05 +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_OffersonPersonalcareallproduct_partArray =
    itemsArryList.homepage05;
  document.getElementById(
    "homepage_OffersonPersonalcareallproduct_part"
  ).innerHTML = `
  <div class="homepage_bottam_box_twoImage_part_items homepage_OffersonPersonalcareallproduct_part_iteams"></div>
  `;
  homepage_OffersonPersonalcareallproduct_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    document
      .querySelector(".homepage_OffersonPersonalcareallproduct_part_iteams")
      .append(img);
  });

  // Part - Offers_on_Household_Personal_care +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers_on_Household_Personal_care +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers_on_Household_Personal_care +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers_on_Household_Personal_care +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_OffersonHousehold_Personalcareallproduct_partArray =
    itemsArryList.Offers_on_Household_Personal_care;
  document.getElementById(
    "homepage_OffersonHousehold_Personalcareallproduct_part"
  ).innerHTML = `
<h1>Offers on daily essentials </h1>
<div class="homepage_boxwithhad_part_items homepage_OffersonHousehold_Personalcareallproduct_part_items"></div>
`;

  homepage_OffersonHousehold_Personalcareallproduct_partArray.forEach(
    (element) => {
      let div = document.createElement("div");
      div.innerHTML = `
    <span>UP TO <span>${element.off_set}</span> OFF</span>
    <div>
        <img src="${element.img_url}" alt="">
        <p>${element.name}</p>
    </div>
    `;
      document
        .querySelector(
          ".homepage_OffersonHousehold_Personalcareallproduct_part_items"
        )
        .append(div);
    }
  );

  // Part - 06 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 06 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 06 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 06 +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_OffersonHouseholdallproduct_partArray = itemsArryList.homepage06;
  document.getElementById(
    "homepage_OffersonHouseholdallproduct_part"
  ).innerHTML = `
  <div class="homepage_bottam_box_twoImage_part_items homepage_OffersonHouseholdallproduct_part_iteams"></div>
  `;
  homepage_OffersonHouseholdallproduct_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    document
      .querySelector(".homepage_OffersonHouseholdallproduct_part_iteams")
      .append(img);
  });

  // Part - Offers_on_Groceries +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers_on_Groceries +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers_on_Groceries +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Offers_on_Groceries +++++++++++++++++++++++++++++++++++++++++++++++++

  let homepage_OffersonGroceriesallproduct_partArray =
    itemsArryList.Offers_on_Groceries;

  document.getElementById(
    "homepage_OffersonGroceriesallproduct_part"
  ).innerHTML = `
<h1>Offers on Groceries</h1>
<div class="homepage_boxwithhad_part_items homepage_OffersonGroceriesallproduct_part_items"></div>
`;
  homepage_OffersonGroceriesallproduct_partArray.forEach((element) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <span>UP TO <span>${element.off_set}</span> OFF</span>
    <div>
        <img src="${element.img_url}" alt="">
        <p>${element.name}</p>
    </div>
    `;
    document
      .querySelector(".homepage_OffersonGroceriesallproduct_part_items")
      .append(div);
  });

  // Part - Hottest Deals +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Hottest Deals +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Hottest Deals +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Hottest Deals +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_HottestDealsallproduct_partArray = itemsArryList.Hottest_Deals;
  document.getElementById("homepage_HottestDealsallproduct_part").innerHTML = `
  <h1 style="padding: 20px 0 20px 15px;">Hottest Deals</h1>
  <div class="homepage_bottam_box_fiveImagebyRound_part_items homepage_HottestDealsallproduct_part_iteams"></div>
  `;
  homepage_HottestDealsallproduct_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    let div = document.createElement("div");
    div.append(img);
    document
      .querySelector(".homepage_HottestDealsallproduct_part_iteams")
      .append(div);
  });

  // Part - Kid's Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Kid's Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Kid's Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Kid's Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_KidsFashionallproduct_partArray = itemsArryList.Kid_s_Fashion;
  document.getElementById("homepage_KidsFashionallproduct_part").innerHTML = `
  <h1 style="padding: 20px 0 20px 15px;">Kid's Fashion</h1>
  <div class="homepage_bottam_box_fiveImagebyRound_part_items homepage_KidsFashionallproduct_part_iteams"></div>
  `;
  homepage_KidsFashionallproduct_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    let div = document.createElement("div");
    div.append(img);
    document
      .querySelector(".homepage_KidsFashionallproduct_part_iteams")
      .append(div);
  });

  // Part - Men’s Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Men’s Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Men’s Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Men’s Fashion +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_MensFashiontwo_partArray = itemsArryList.Men_s_Fashion;
  document.getElementById("homepage_MensFashiontwo_part").innerHTML = `
  <h1 style="padding: 20px 0 20px 15px;">Men’s Fashion</h1>
  <div class="homepage_bottam_box_twoImagebyRound_part_items homepage_MensFashiontwo_part_iteams"></div>
  `;
  homepage_MensFashiontwo_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    let div = document.createElement("div");
    div.append(img);
    document.querySelector(".homepage_MensFashiontwo_part_iteams").append(div);
  });

  // Part - Men’s Fashion items+++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Men’s Fashion items+++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Men’s Fashion items+++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - Men’s Fashion items+++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_MensFashionallproduct_partArray =
    itemsArryList.Men_s_Fashion_item;
  document.getElementById("homepage_MensFashionallproduct_part").innerHTML = `
  <div class="homepage_bottam_box_fiveImagebyRound_part_items homepage_MensFashionallproduct_part_iteams"></div>
  `;
  homepage_MensFashionallproduct_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    let div = document.createElement("div");
    div.append(img);
    document
      .querySelector(".homepage_MensFashionallproduct_part_iteams")
      .append(div);
  });

  // Part - 08 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 08 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 08 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 08 +++++++++++++++++++++++++++++++++++++++++++++++++

  let homepage_homeCitiPart1_partArray = itemsArryList.homepage08;
  document.getElementById("homepage_homeCitiPart1_part").innerHTML = `
<div class="homepage_bottam_box_twoImage_part_items homepage_homeCitiPart1_part_iteams"></div>
`;
  homepage_homeCitiPart1_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    document.querySelector(".homepage_homeCitiPart1_part_iteams").append(img);
  });

  // Part - 09 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 09 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 09 +++++++++++++++++++++++++++++++++++++++++++++++++
  // Part - 09 +++++++++++++++++++++++++++++++++++++++++++++++++
  let homepage_homeCitiPart2_partArray = itemsArryList.homepage09;
  document.getElementById("homepage_homeCitiPart2_part").innerHTML = `
<div class="homepage_bottam_box_twoImage_part_items homepage_homeCitiPart2_part_iteams"></div>
`;
  homepage_homeCitiPart2_partArray.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;
    document.querySelector(".homepage_homeCitiPart2_part_iteams").append(img);
  });
}

function homepage_Shopbycategorieso_part_iteamsslide(direction) {
  var container = document.querySelector(
    ".homepage_Shopbycategorieso_part_iteams"
  );

  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
let homepage_bank_and_paytm_add_part_count = 0;
function homepage_bank_and_paytm_add_part_iteamsslide(direction) {
  var container = document.querySelector(
    ".homepage_bank_and_paytm_add_part_iteams"
  );

  homepage_bank_and_paytm_add_part_count++;
  if (homepage_bank_and_paytm_add_part_count == 4) {
    container.scrollLeft = 0;
    homepage_bank_and_paytm_add_part_count = 0;
  }
  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 150;
    } else {
      container.scrollLeft += 150;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
function homepage_top_Shop_from_Top_Categories_part_iteamsslide(direction) {
  var container = document.querySelector(
    ".homepage_top_Shop_from_Top_Categories_part_iteams"
  );
  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
function homepage_TopDeals_part_all_category_iteamsslide(direction) {
  var container = document.querySelector(
    ".homepage_TopDeals_part_all_category_iteams"
  );

  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("homePage-topslideshow-image");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

async function dishplayData1() {
  try {
    let res = await fetch(
      "https://masai-server.herokuapp.com/items?item_category=Top_Deals"
    );
    let data = await res.json();

    // Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++
    // Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++
    // Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++
    // Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++
    let homepage_TopDeals_part_all_categoryArray = data;

    document.getElementById("homepage_TopDeals_part_all_category").innerHTML = `
      <h1 style="padding: 20px 0 20px 50px;">Top Deals</h1>
      <div class="homepage_TopDeals_part_all_category_container">
        <div class="homepage_sliderLiftRightarrow_images_container">
            <a class="prev" onclick="homepage_TopDeals_part_all_category_iteamsslide('left')"></a>
            <a class="next" onclick="homepage_TopDeals_part_all_category_iteamsslide('right')"></a>
        </div>
      <div class="homepage_TopDeals_part_all_category_iteams"> </div>
      </div>
    `;
    homepage_TopDeals_part_all_categoryArray.forEach((element) => {
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

      document
        .querySelector(".homepage_TopDeals_part_all_category_iteams")
        .append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
