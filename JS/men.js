let data;
async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/mens`)
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
    item.forEach(e => {
            let div = document.createElement("div")
            div.setAttribute("class","inside-container")

            let imagebox = document.createElement('div')
            let img = document.createElement('img')
            img.setAttribute("class","imges")
            img.src = e.item_img_url;
            imagebox.setAttribute("class","image-container")

            let discount = document.createElement('div')
            discount.setAttribute("class","discount-container")
            let tag = document.createElement('p')
            tag.setAttribute('class','discount-tag')
            tag.innerHTML = e.item_discount + " OFF"
            discount.append(tag)

            imagebox.append(discount,img)

            let div1=document.createElement('div')
            let titles = document.createElement("p")
            titles.innerText= e.item_name;
            titles.setAttribute("class","heading")
            div1.append(titles)

            let div2=document.createElement('div')
            let flex = document.createElement('div')
            flex.setAttribute("class","flex-box")
            let firstprice = document.createElement('p')
            firstprice.innerText = "₹" + e.item_price;
            firstprice.setAttribute("class","first-price")
            let finalprice = document.createElement('p')
            finalprice.innerText = "₹" + e.item_final_price; 
            finalprice.setAttribute("class","final-price")
            flex.append(firstprice,finalprice)
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