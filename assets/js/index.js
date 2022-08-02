// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++
// Part -  homepage body+++++++++++++++++++++++++++++++++++++++++++++++++

document.body.innerHTML = `
<!-- Done -->
<section id="homepage_top_slider_part"></section>
<!-- Done -->
<section id="homepage_top__part_all_category"></section>
<section id="homepage_top_Shop_from_Top_Categories_part"></section>
<!-- Done -->
<section id="homepage_top_hollyday_part_all_category"></section>
<section id="homepage_TopDeals_part_all_category"></section>
<section id="homepage_bank_and_paytm_add_part"></section>
<!-- Done -->
<section id="homepage_Offersondailyessentials_part" class="homepage_boxwithhad_part"></section>
<section id="homepage_Shopbycategorieso_part"></section>
<!-- Done -->
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
`;

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

let homepage_top_Shop_from_Top_Categories_partArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109073_1654018509_Fruits-Veg.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109088_1654018530_Beverage-Corner.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109143_1656693044_Foodgrains-Oils.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109179_1654018570_Snacks-FOOD.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109205_1654018587_Home-care.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109260_1654018604_personal-Care.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109280_1654018629_Dairy-Bakery.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109301_1654018647_Instant-Foods.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109327_1654018658_Home-Kitchen.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109344_1654018675_Mens-Wear.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109379_1654018684_Womens-Wear.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109408_1654018699_Kids-WEAR.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109544_1656508232_washing-Machine.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109495_1654018730_Smartphones.jpg",
];
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
let homepage_TopDeals_part_all_categoryArray = [
  {
    item_name:
      "Saffola Gold Refined Rice Bran And Sunflower Based Blended Oil 3 L + Daawat Devaaya Basmati Rice 5 kg (Combo Pack)",
    item_img_url:
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-1-20220624.jpg",
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-13-20220624.jpg",
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-14-20220624.jpg",
    ],
    item_final_price: 915.0,
    item_price: 1310.0,
    item_discount: 30,
    item_tag_name: "Trending",
    item_disc_price: 395.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Tur / Arhar Dal 2 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-0-202203170610.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-0-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-1-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-2-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-legal-images-o491417390-p491417390-3-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-legal-images-o491417390-p491417390-4-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-legal-images-o491417390-p491417390-5-202203170610.jpg",
    ],
    item_final_price: 210.0,
    item_price: 270.0,
    item_discount: 22,
    item_tag_name: "Trending",
    item_disc_price: 60.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Colgate Strong Teeth Dental Cream Toothpaste 500 g Saver Pack",
    item_img_url:
      "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-500-g-saver-pack-product-images-o491055460-p491055460-0-202203151056.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-500-g-saver-pack-product-images-o491055460-p491055460-0-202203151056.jpg",
      "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-500-g-saver-pack-product-images-o491055460-p491055460-1-202203151056.jpg",
      "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-500-g-saver-pack-product-images-o491055460-p491055460-2-202203151056.jpg",
    ],
    item_final_price: 183.0,
    item_price: 253.0,
    item_discount: 27,
    item_tag_name: "Trending",
    item_disc_price: 70.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Surf Excel Matic Front Load Detergent Powder 6 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-0-202204291101.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-0-202204291101.jpg",
      "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-1-202204291101.jpg",
      "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-2-202204291101.jpg",
      "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-3-202204291102.jpg",
      "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-4-202204291102.jpg",
      "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-product-images-o492848164-p591223797-5-202204291102.jpg",
      "https://www.jiomart.com/images/product/150x150/492848164/surf-excel-matic-front-load-detergent-powder-6-kg-legal-images-o492848164-p591223797-6-202206031811.jpg",
    ],
    item_final_price: 1275.0,
    item_price: 1425.0,
    item_discount: 10,
    item_tag_name: "Trending",
    item_disc_price: 150.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Maggi 2-Minute Masala Instant Noodles 560 g",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-0-202203150702.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-0-202203150702.jpg",
      "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-1-202203150702.jpg",
      "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-2-202203150702.jpg",
      "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-3-202203150702.jpg",
      "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-5-202203150702.jpg",
      "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-legal-images-o490003834-p490003834-6-202203150702.jpg",
      "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-legal-images-o490003834-p490003834-7-202203150702.jpg",
      "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-legal-images-o490003834-p490003834-8-202203150702.jpg",
    ],
    item_final_price: 90.0,
    item_price: 109.0,
    item_discount: 17,
    item_tag_name: "Trending",
    item_disc_price: 19.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Amul Butter 500 g (Carton)",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-0-202203152128.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-0-202203152128.jpg",
      "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-1-202203152128.jpg",
      "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-2-202203152128.jpg",
      "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-3-202203152128.jpg",
      "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-4-202203152128.jpg",
      "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-legal-images-o490001392-p490001392-7-202203152128.jpg",
      "https://www.jiomart.com/images/product/150x150/490001392/amul-butter-500-g-carton-legal-images-o490001392-p490001392-9-202203152128.jpg",
    ],
    item_final_price: 245.0,
    item_price: 255.0,
    item_discount: 3,
    item_tag_name: "Trending",
    item_disc_price: 10.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Sugar (M) 2 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/491696003/sugar-m-2-kg-product-images-o491696003-p590108360-0-202205272027.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/491696003/sugar-m-2-kg-product-images-o491696003-p590108360-0-202205272027.jpg",
      "https://www.jiomart.com/images/product/150x150/491696003/sugar-m-2-kg-product-images-o491696003-p590108360-1-202205272027.jpg",
      "https://www.jiomart.com/images/product/150x150/491696003/sugar-m-2-kg-product-images-o491696003-p590108360-2-202205272027.jpg",
      "https://www.jiomart.com/images/product/150x150/491696003/sugar-m-2-kg-legal-images-o491696003-p590108360-3-202205272027.jpg",
      "https://www.jiomart.com/images/product/150x150/491696003/sugar-m-2-kg-legal-images-o491696003-p590108360-5-202205272027.jpg",
    ],
    item_final_price: 79.0,
    item_price: 100.0,
    item_discount: 21,
    item_tag_name: "Trending",
    item_disc_price: 21.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Closeup Everfresh+ Red Hot Gel Toothpaste 150 g (Pack of 2)",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/490008332/closeup-everfresh-red-hot-gel-toothpaste-150-g-pack-of-2-product-images-o490008332-p490008332-0-202206222347.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/490008332/closeup-everfresh-red-hot-gel-toothpaste-150-g-pack-of-2-product-images-o490008332-p490008332-0-202206222347.jpg",
      "https://www.jiomart.com/images/product/600x600/490008332/closeup-everfresh-red-hot-gel-toothpaste-150-g-pack-of-2-product-images-o490008332-p490008332-2-202206222347.jpg",
      "https://www.jiomart.com/images/product/600x600/490008332/closeup-everfresh-red-hot-gel-toothpaste-150-g-pack-of-2-product-images-o490008332-p490008332-3-202206222347.jpg",
    ],
    item_final_price: 121.0,
    item_price: 182.0,
    item_discount: 33,
    item_tag_name: "Trending",
    item_disc_price: 61.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Surf Excel Easy Wash Detergent Powder 5 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202203151445.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202203151445.jpg",
      "https://www.jiomart.com/images/product/150x150/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-1-202203151445.jpg",
      "https://www.jiomart.com/images/product/150x150/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-2-202203151445.jpg",
      "https://www.jiomart.com/images/product/150x150/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-3-202203151445.jpg",
      "https://www.jiomart.com/images/product/150x150/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-4-202203151445.jpg",
      "https://www.jiomart.com/images/product/150x150/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-5-202203151445.jpg",
      "https://www.jiomart.com/images/product/150x150/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-6-202203151445.jpg",
    ],
    item_final_price: 590.0,
    item_price: 730.0,
    item_discount: 19,
    item_tag_name: "Trending",
    item_disc_price: 140.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Britannia NutriChoice Hi-Fibre Digestive Biscuits 1 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-product-images-o491373488-p491373488-0-202203151522.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-product-images-o491373488-p491373488-0-202203151522.jpg",
      "https://www.jiomart.com/images/product/150x150/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-product-images-o491373488-p491373488-1-202203151523.jpg",
      "https://www.jiomart.com/images/product/150x150/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-legal-images-o491373488-p491373488-2-202203151523.jpg",
      "https://www.jiomart.com/images/product/150x150/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-legal-images-o491373488-p491373488-3-202203151523.jpg",
    ],
    item_final_price: 162.0,
    item_price: 220.0,
    item_discount: 26,
    item_tag_name: "Trending",
    item_disc_price: 58.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Amul Taaza Homogenised Toned Milk 1 L (Tetra Pak)",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-0-202203152257.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-0-202203152257.jpg",
      "https://www.jiomart.com/images/product/150x150/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-1-202203152257.jpg",
      "https://www.jiomart.com/images/product/150x150/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-2-202203152257.jpg",
      "https://www.jiomart.com/images/product/150x150/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-3-202203152257.jpg",
      "https://www.jiomart.com/images/product/150x150/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-legal-images-o490010311-p490010311-6-202203152257.jpg",
    ],
    item_final_price: 65.0,
    item_price: 68.0,
    item_discount: 4,
    item_tag_name: "Trending",
    item_disc_price: 3.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Mangaldeep Mogra Puja Agarbattis 120 pcs",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/491584193/mangaldeep-mogra-puja-agarbattis-120-pcs-product-images-o491584193-p491584193-0-202203170516.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/491584193/mangaldeep-mogra-puja-agarbattis-120-pcs-product-images-o491584193-p491584193-0-202203170516.jpg",
      "https://www.jiomart.com/images/product/600x600/491584193/mangaldeep-mogra-puja-agarbattis-120-pcs-product-images-o491584193-p491584193-1-202203170516.jpg",
      "https://www.jiomart.com/images/product/600x600/491584193/mangaldeep-mogra-puja-agarbattis-120-pcs-product-images-o491584193-p491584193-3-202203170516.jpg",
    ],
    item_final_price: 32.0,
    item_price: 65.0,
    item_discount: 50,
    item_tag_name: "Trending",
    item_disc_price: 33.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: false,
  },
  {
    item_name:
      "Lux Rose & Vitamin E Soft Glowing Skin Soap Bar 150 g (Pack of 3)",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-0-202203151351.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-0-202203151351.jpg",
      "https://www.jiomart.com/images/product/150x150/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-1-202203151351.jpg",
      "https://www.jiomart.com/images/product/150x150/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-2-202203151351.jpg",
      "https://www.jiomart.com/images/product/150x150/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-3-202203151351.jpg",
      "https://www.jiomart.com/images/product/150x150/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-5-202203151352.jpg",
      "https://www.jiomart.com/images/product/600x600/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-7-202203151352.jpg",
      "https://www.jiomart.com/images/product/150x150/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-product-images-o490915877-p490915877-8-202203151352.jpg",
    ],
    item_final_price: 181.0,
    item_price: 216.0,
    item_discount: 16,
    item_tag_name: "Trending",
    item_disc_price: 35.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
  {
    item_name: "Surf Excel Matic Top Load Detergent Powder 6 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-product-images-o492848165-p591223798-0-202204291101.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-product-images-o492848165-p591223798-0-202204291101.jpg",
      "https://www.jiomart.com/images/product/150x150/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-product-images-o492848165-p591223798-1-202204291101.jpg",
      "https://www.jiomart.com/images/product/150x150/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-product-images-o492848165-p591223798-2-202204291101.jpg",
      "https://www.jiomart.com/images/product/600x600/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-product-images-o492848165-p591223798-3-202204291102.jpg",
      "https://www.jiomart.com/images/product/600x600/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-product-images-o492848165-p591223798-4-202204291102.jpg",
      "https://www.jiomart.com/images/product/600x600/492848165/surf-excel-matic-top-load-detergent-powder-6-kg-legal-images-o492848165-p591223798-8-202206031811.jpg",
    ],
    item_final_price: 1275.0,
    item_price: 1425.0,
    item_discount: 10,
    item_tag_name: "Trending",
    item_disc_price: 150.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: false,
  },
  {
    item_name: "Parle-G Gold Biscuits 1 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/491335633/parle-g-gold-biscuits-1-kg-product-images-o491335633-p491335633-0-202203150704.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/600x600/491335633/parle-g-gold-biscuits-1-kg-product-images-o491335633-p491335633-0-202203150704.jpg",
      "https://www.jiomart.com/images/product/150x150/491335633/parle-g-gold-biscuits-1-kg-product-images-o491335633-p491335633-1-202203150704.jpg",
      "https://www.jiomart.com/images/product/150x150/491335633/parle-g-gold-biscuits-1-kg-legal-images-o491335633-p491335633-2-202203150704.jpg",
    ],
    item_final_price: 112.0,
    item_price: 140.0,
    item_discount: 20,
    item_tag_name: "Trending",
    item_disc_price: 28.0,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
  },
];

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
  let div = document.createElement("div");
  div.innerHTML = `
  <div><span class="homepage_TopDeals_part_dis_section"><span>${
    element.item_discount
  }</span>%<br>off</span> <span></span></div>
  <div class="homepage_TopDeals_part_pro_detail">
      <img class="product-image-photo"
          src="${element.item_img_url}"
          alt="">
      <p class="clsgetname">${element.item_name.slice(0, 50)}</p>
  </div>
  <div class="homepage_TopDeals_part_price_box">
      <p class="final_price">₹ ${element.item_final_price}.00</p>
      <p class="price">M.R.P: <strike>₹ ${element.item_price}.00</strike></p>
      <p class="save_price">Save ₹ ${element.item_disc_price}.00</p>
  </div>
  <div id="homepage_TopDeals_part_Addtocart_btn">
  <button type="button"><span class="txt_btn">Add to Cart</span><span class="add_plus"></span></button>
  </div>
  `;

  document
    .querySelector(".homepage_TopDeals_part_all_category_iteams")
    .append(div);
});

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
// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
// Part - bank_and_paytm_add +++++++++++++++++++++++++++++++++++++++++++++++++
let homepage_bank_and_paytm_add_partArray = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656494148_910-x-278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657119726_INDUSLAND-Bank-Offer-Banner-910x278-4-7-22.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657175622_910-x-278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657278400_910-X-278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657631246_Payzapp_910x278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656657585_Cred-pay-Package_910x278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656657679_jiomart-svg_910x278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656930218_AU-Banking--unit-1st-to-31st-July_910x278.jpg",
];

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
let homepage_bank_and_paytm_add_part_count =0;
setInterval(() => {
  homepage_bank_and_paytm_add_part_iteamsslide("right");
}, 5000);
function homepage_bank_and_paytm_add_part_iteamsslide(direction) {
  var container = document.querySelector(
    ".homepage_bank_and_paytm_add_part_iteams"
  );

  homepage_bank_and_paytm_add_part_count++;
if(homepage_bank_and_paytm_add_part_count == 4){
  container.scrollLeft = 0;
  homepage_bank_and_paytm_add_part_count =0;
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

  document.querySelector(".homepage_Shopbycategorieso_part_iteams").append(div);
});

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
