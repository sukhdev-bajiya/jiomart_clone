let data;
async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/fruitsNvegies`)
       let item = await res.json()
       localStorage.setItem("listreversedata",JSON.stringify(item))
       displaydata (item);
    }
    catch(err)
    {
        console.log(err)
    }
}
getdata ()
let container = document.getElementById("products_display");

function displaydata (item){
    let products = document.createElement('p')
    products.setAttribute("class","gridDisplay")
    products.innerText = 'ALL PRODUCTS'
    item.forEach(e => {
            let div = document.createElement("div")
            div.setAttribute("class","inside-container")

            let imagebox = document.createElement('div')
            let img = document.createElement('img')
            img.setAttribute("class","imges")
            img.src = e.item_img_url;
            imagebox.setAttribute("class","image-container")

            let category = document.createElement('div')
            category.setAttribute("class","category-container")
            let symbol = document.createElement('div')
            symbol.setAttribute('class','symbol-veg')

            category.append(symbol)

            imagebox.append(category,img)

            let div1=document.createElement('div')
            let titles = document.createElement("p")
            titles.innerText= e.item_name;
            titles.setAttribute("class","heading")
            div1.append(titles)

            let div2=document.createElement('div')
            let flex = document.createElement('div')
            flex.setAttribute("class","flex-box")
            let price = document.createElement('p')
            price.innerText = "M.R.P: ₹ " + e.item_price; 
            price.setAttribute("class","discount-price")
            flex.append(price)
            div2.append(flex)

            let div3 = document.createElement('div')
            div3.setAttribute("class","AddBtn")
            let addBtn = document.createElement('button')
            addBtn.setAttribute("class","AddToCart")
            addBtn.innerText = "ADD TO CART"

            div3.append(addBtn)

            div.append(imagebox,div1,div2,div3)

            let a =  document.createElement('a')
            a.href = "../HTML/productinfo.html"
            a.append(div)
            div.onclick = function(){
            localStorage.setItem("proinfo",JSON.stringify(e))
            }

        container.append(a)
    });
}