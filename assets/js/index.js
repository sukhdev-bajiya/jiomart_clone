// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++

// document.body.innerHTML = `
// <section id="homepage_top_slider_part"></section>
// <section id="homepage_top_add_part_all_category"></section>
// <section></section>
// <section id="homepage_top_hollydayAdd_part_all_category"></section>
// <section id="homepage_TopDealsAdd_part_all_category"></section>
// <section></section>
// <section id="homepage_OffersondailyessentialsAdd_part" class="homepage_boxwithhadAdd_part"></section>
// <section id="homepage_ShopbycategoriesoAdd_part"></section>
// <section id="homepage_WomensFashiontwoAdd_part"></section>

// <section id="homepage_WomensFashionallproduct_part"></section>
// <section id="homepage_OffersonPersonalcareallproduct_part" class="homepage_boxwithhadAdd_part"></section>
// <section id="homepage_OffersonHousehold&Personalcareallproduct_part"></section>
// <section id="homepage_OffersonHouseholdallproduct_part"></section>
// <section id="homepage_OffersonGroceriesallproduct_part" class="homepage_boxwithhadAdd_part"></section>
// <section id="homepage_HottestDealsallproduct_part"></section>
// <section id="homepage_KidsFashionallproduct_part"></section>
// <section id="homepage_MensFashiontwoAdd_part"></section>
// <section id="homepage_MensFashionallproduct_part"></section>
// <section id="homepage_homeCitiPart1Add_part" class="homepage_bottam_box_twoImage_part_Section"></section>
// <section id="homepage_homeCitiPart2Add_part" class="homepage_bottam_box_twoImage_part_Section"></section>
// `;

// Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage_topslider +++++++++++++++++++++++++++++++++++++++++++++++++
let homepage_topslider = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659106018_Desktop_31-07-22.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659117862_Food--Grains_1680x320.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656184459_1655579994_1654784310_1654703960_1654615182_Detergents-1680.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659107346_1658932277_1658845393_1658724256_EOSS_KV_Desktop.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659106508_1658843920_Appliances_Accessories_Fest_KV_Desktop_web.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659106513_1658897480_1st_Bannesddss.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657897108_1657641245_1657556677_1657205534_JioMart-Best-Selling-Electronics-Carousel-Banner-27_05_2022.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658244944_1658232168_Dairy-Bakery_1680-x-320-_sugar-strip.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658904013_Oral-Fest_1680-x-320.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1654950291_Wow-Weekend-banner-1680-x-320_1.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658910317_Mumbai_Web_JioMart_1.jpg",
];
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

// Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  Adds +++++++++++++++++++++++++++++++++++++++++++++++++
let homepage_top__part_all_categoryArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659202186_Sale-Starts-at-Midnight_1240x150.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658524824_July-22_Slim-banner2_web.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659106011_MUMBAI.jpg",
];
homepage_top__part_all_categoryArray.forEach((element) => {
  let img = document.createElement("img");
  img.src = element;
  document.getElementById("homepage_top__part_all_category").append(img);
});

// Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  Shop_from_Top_Categories +++++++++++++++++++++++++++++++++++++++++++++++++

// Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - hollyday Add +++++++++++++++++++++++++++++++++++++++++++++++++
let homepage_top_hollyday_part_all_categoryArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658837805_Rakshabandan-offer.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg",
];

homepage_top_hollyday_part_all_categoryArray.forEach((element) => {
  let img = document.createElement("img");
  img.src = element;
  document
    .getElementById("homepage_top_hollyday_part_all_category")
    .append(img);
});

// Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Top Deals +++++++++++++++++++++++++++++++++++++++++++++++++

// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++

// Part - Offers on daily essentials +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Offers on daily essentials  +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Offers on daily essentials  +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Offers on daily essentials  +++++++++++++++++++++++++++++++++++++++++++++++++
let homepage_Offersondailyessentials_part_itemsArray = [
  {
    name: "Dals & Pulses",
    img_url:
      "https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png",
    off_set: "20%",
  },
  {
    name: "Atta, Flours & Sooji",
    img_url: "https://www.jiomart.com/images/category/14/thumb/0-14.png",
    off_set: "50%",
  },
  {
    name: "Edible Oils",
    img_url: "https://www.jiomart.com/images/category/18/thumb/0-18.png",
    off_set: "20%",
  },
  {
    name: "Salt, Sugar & Jaggery",
    img_url: "https://www.jiomart.com/images/category/20/thumb/0-20.png",
    off_set: "10%",
  },
  {
    name: "Bath & Hand Wash",
    img_url:
      "https://www.jiomart.com/images/category/119/thumb/bath-hand-wash-20200714.png",
    off_set: "15%",
  },
  {
    name: "Toothpaste",
    img_url:
      "https://www.jiomart.com/images/category/7/thumb/toothpaste-20200520.png",
    off_set: "33%",
  },
  {
    name: "Noodle, Pasta, Vermicelli",
    img_url:
      "https://www.jiomart.com/images/category/191/thumb/noodle-pasta-vermicelli-20200603.png",
    off_set: "50%",
  },
  {
    name: "Biscuits & Cookies",
    img_url: "https://www.jiomart.com/images/category/44/thumb/0-44.png",
    off_set: "30%",
  },
];
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
let homepage_Shopbycategorieso_partArray = [
  {
    name: "Personal Care",
    img_url:
      "https://www.jiomart.com/images/category/6/thumb/0-6.png?v=1607022291",
  },
  {
    name: "Home Care",
    img_url:
      "https://www.jiomart.com/images/category/7/thumb/0-7.png?v=1607022291",
  },
  {
    name: "Baby Care",
    img_url:
      "https://www.jiomart.com/images/category/10/thumb/0-10.png?v=1607022291",
  },
  {
    name: "Staples",
    img_url:
      "https://www.jiomart.com/images/category/13/thumb/staples-20200710.jpg?v=1607022291",
  },
  {
    name: "Snacks & Branded Foods",
    img_url:
      "https://www.jiomart.com/images/category/11/thumb/0-11.png?v=1607022291",
  },
  {
    name: "Dairy & Bakery",
    img_url:
      "https://www.jiomart.com/images/category/12/thumb/0-12.png?v=1607022291",
  },
  {
    name: "Fruits & Vegetables",
    img_url:
      "https://www.jiomart.com/images/category/141/thumb/fruits-vegetables-20200520.png?v=1607022291",
  },
  {
    name: "Beverages",
    img_url:
      "https://www.jiomart.com/images/category/3/thumb/0-3.png?v=1607022291",
  },
];
// document.getElementById(
//   "homepage_Shopbycategorieso_part"
// ).innerHTML = `<div class="homepage_Shopbycategorieso_part_container">
// <div class="homepage_Shopbycategorieso_images_container">
//     <a class="prev" onclick="plusSlides(-1)">❮</a>
//     <a class="next" onclick="plusSlides(1)">❯</a>
// </div>
// <div class="homepage_Shopbycategorieso_part_iteams"> </div>
// </div>
//     `;
// homepage_Shopbycategorieso_partArray.forEach((element) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <img src="${element.img_url}" alt="">
//     <p>${element.name}</p>
//   `;

//   document.querySelector(".homepage_Shopbycategorieso_part_iteams").append(div);
// });

// Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Women's Fashion two+++++++++++++++++++++++++++++++++++++++++++++++++
let homepage_WomensFashiontwo_partArray = [
  "https://www.jiomart.com/images/cms/section/category/498/527.png?v=1651706581",
  "https://www.jiomart.com/images/cms/section/category/498/579.png?v=1651706581",
];
document.getElementById("homepage_WomensFashiontwo_part").innerHTML = `
  <div class="homepage_bottam_box_twoImagebyRound_part_items homepage_WomensFashiontwo_part_iteams"></div>
  `;
homepage_WomensFashiontwo_partArray.forEach((element) => {
  let img = document.createElement("img");
  img.src = element;
  let div = document.createElement("div");
  div.append(img);
  document.querySelector(".homepage_WomensFashiontwo_part_iteams").append(div);
});

// Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - Women's Fashion  +++++++++++++++++++++++++++++++++++++++++++++++++
let homepage_WomensFashionallproduct_partArray = [
  "https://www.jiomart.com/images/cms/section/category/498/511.png?v=1651706581",
  "https://www.jiomart.com/images/cms/section/category/498/525.png?v=1651706581",
  "https://www.jiomart.com/images/cms/section/category/498/530.png?v=1651706581",
  "https://www.jiomart.com/images/cms/section/category/498/572.png?v=1651706581",
  "https://www.jiomart.com/images/cms/section/category/498/578.png?v=1651706581",
];
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
let homepage_OffersonPersonalcareallproduct_partArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656790165_Web--600-x-350.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1647359679_Milk-Fest--600x350.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656690807_Min-33-600x350.jpg",
];
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
let homepage_OffersonHousehold_Personalcareallproduct_partArray = [
  {
    name: "All Purpose Cleaners",
    img_url:
      "https://www.jiomart.com/images/category/37/thumb/all-purpose-cleaners-20200603.png",
    off_set: "20%",
  },
  {
    name: "Detergent Bars",
    img_url:
      "https://www.jiomart.com/images/category/43/thumb/detergent-bars-20200520.png",
    off_set: "25%",
  },
  {
    name: "Feminine Hygiene",
    img_url:
      "https://www.jiomart.com/images/category/17/thumb/feminine-hygiene-20200605.png",
    off_set: "50%",
  },
  {
    name: "Skin Care",
    img_url: "https://www.jiomart.com/images/category/28/thumb/0-28.png",
    off_set: "50%",
  },
  {
    name: "Oral Care",
    img_url:
      "https://www.jiomart.com/images/category/6/thumb/oral-care-20200603.png",
    off_set: "30%",
  },
  {
    name: "Hair Care",
    img_url: "https://www.jiomart.com/images/category/31/thumb/0-31.png",
    off_set: "35%",
  },
  {
    name: "Baby Care",
    img_url: "https://www.jiomart.com/images/category/10/thumb/0-10.png",
    off_set: "10%",
  },
  {
    name: "Paper Tissues & Napkins",
    img_url:
      "https://www.jiomart.com/images/category/213/thumb/paper-tissues-napkins-20210727.png",
    off_set: "50%",
  },
];
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
let homepage_OffersonHouseholdallproduct_partArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1645558047_web_mini.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1624538640_wm.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1628171483_Chinese_webmini.jpg",
];
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

let homepage_OffersonGroceriesallproduct_partArray = [
  {
    name: "Breakfast Cereals",
    img_url:
      "https://www.jiomart.com/images/category/188/thumb/breakfast-cereals-20200603.png",
    off_set: "20%",
  },
  {
    name: "Dairy",
    img_url:
      "https://www.jiomart.com/images/category/117/thumb/dairy-20200522.png",
    off_set: "15%",
  },
  {
    name: "Dry Fruits",
    img_url: "https://www.jiomart.com/images/category/17/thumb/0-17.png",
    off_set: "50%",
  },
  {
    name: "Masalas & Spices",
    img_url: "https://www.jiomart.com/images/category/15/thumb/0-15.png",
    off_set: "30%",
  },
  {
    name: "Snacks & Namkeen",
    img_url: "https://www.jiomart.com/images/category/135/thumb/0-135.png",
    off_set: "40%",
  },
  {
    name: "Fruit juices",
    img_url: "https://www.jiomart.com/images/category/25/thumb/0-25.png",
    off_set: "50%",
  },
  {
    name: "Energy & Soft Drinks",
    img_url: "https://www.jiomart.com/images/category/26/thumb/0-26.png",
    off_set: "50%",
  },
  {
    name: "Papads, Ready To Fry",
    img_url:
      "https://www.jiomart.com/images/category/221/thumb/papads-ready-to-fry-20200520.png",
    off_set: "25%",
  },
];

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
let homepage_HottestDealsallproduct_partArray = [
  "https://www.jiomart.com/images/cms/section/category/501/509.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/579.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/507.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/515.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/527.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/516.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/530.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/508.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/584.png?v=1628791106",
  "https://www.jiomart.com/images/cms/section/category/501/525.png?v=1628791106",
];
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
let homepage_KidsFashionallproduct_partArray = [
  "https://www.jiomart.com/images/cms/section/category/502/507.png?v=1628783932",
  "https://www.jiomart.com/images/cms/section/category/502/565.png?v=1628783932",
  "https://www.jiomart.com/images/cms/section/category/502/506.png?v=1628783932",
  "https://www.jiomart.com/images/cms/section/category/502/549.png?v=1628783932",
  "https://www.jiomart.com/images/cms/section/category/502/571.png?v=1628783932",
];
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
let homepage_MensFashiontwo_partArray = [
  "https://www.jiomart.com/images/cms/section/category/503/509.png?v=1628786706",
  "https://www.jiomart.com/images/cms/section/category/503/508.png?v=1628786706",
];
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
let homepage_MensFashionallproduct_partArray = [
  "https://www.jiomart.com/images/cms/section/category/503/516.png?v=1628786706",
  "https://www.jiomart.com/images/cms/section/category/503/562.png?v=1628786706",
  "https://www.jiomart.com/images/cms/section/category/503/515.png?v=1628786706",
  "https://www.jiomart.com/images/cms/section/category/503/505.png?v=1628786706",
  "https://www.jiomart.com/images/cms/section/category/503/592.png?v=1628786706",
];
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

let homepage_homeCitiPart1_partArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658861086_Surf-Excel-Banner_FINAL_600pxX350px.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1626259904_wm.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1654538046_600x350-Hot-Spot.jpg",
];
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
let homepage_homeCitiPart2_partArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1626448037_snackswebmini.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1659004297_600x350-Buy-at-99.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1641903326_Your-Favourite-Noodle_600x350.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658987528_Rusk_Web_banners_new_Rusk_Web_banners_new_600x350.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658860918_0_wev_scrub.jpg",
];
document.getElementById("homepage_homeCitiPart2_part").innerHTML = `
<div class="homepage_bottam_box_twoImage_part_items homepage_homeCitiPart2_part_iteams"></div>
`;
homepage_homeCitiPart2_partArray.forEach((element) => {
  let img = document.createElement("img");
  img.src = element;
  document.querySelector(".homepage_homeCitiPart2_part_iteams").append(img);
});
