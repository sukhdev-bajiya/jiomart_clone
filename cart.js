var person = JSON.parse(localStorage.getItem('UserDetails')) || [] ;
    document.querySelector('#hello_text').textContent = person[0].Fname || 'Hello Signin';
    document.querySelector('#signin_text').textContent =person[0].Fname || 'signup';

  function home(){
      window.location.href ="home.html"
  }
  function cart(){
      window.location.href ="cart.html"
  }
  function product(){
      window.location.href="product.html"
  }
  function wallet(){
    window.location.href="wallet.html"
  }
  function signin(){
    window.location.href="sign.html"
  }
  function account(){
      window.location.href="account.html"
  }
  function gift(){
    window.location.href = "GiftStrore.html"
  }

    var amount =0;
    var array = JSON.parse(localStorage.getItem('cartData')) || [];


    document.querySelector('#count-items').innerHTML = array.length + " "+"items "
    document.querySelector('#counter').innerHTML = array.length
    array.map(function(elem ,index){
      var plus = document.createElement('button')
      var minus = document.createElement('button')
      plus.textContent= '+';
      minus.textContent= '-';
      var p= document.createElement('p');
      p.style.marginTop = '90px'
      var no = 1;

      p.textContent = no;

      var img = document.createElement('img')
      img.setAttribute('src',elem.image_url) ;
      var name = document.createElement('h4');
      name.textContent = elem.type  ;
      var value = document.createElement('h4');
      value.textContent = elem.MRP +" /-";
      var hr = document.createElement('hr')
      var div = document.createElement('div')
      div.append(img,name,value,minus,p,plus);
      document.querySelector('#items-shower').append(div,hr)

      amount+= Number(elem.MRP);



      plus.addEventListener('click',function(){
        no = no+1 ;
        p.textContent = no ;
        amount += Number(elem.MRP) ;
        document.querySelector('#total-Bill').textContent = amount ;
        document.querySelector('#total_bill_amount').textContent = amount;
        document.querySelector('#checkout_price').textContent = amount;

      });
      minus.addEventListener('click',function(event,index){
        no = no-1 ;
        p.textContent = no ;
        amount -= Number(elem.MRP) ;
        document.querySelector('#total-Bill').textContent = amount ;
        document.querySelector('#total_bill_amount').textContent = amount;
        document.querySelector('#checkout_price').textContent = amount;
        if(no<0){

          array.splice(index,1);
          localStorage.setItem('cardData',JSON.stringify(array)) ;
          event.target.parentNode.remove();
          document.querySelector('#count-items').innerHTML = array.length + " "+"items "
          document.querySelector('#counter').innerHTML = array.length
        }
      });
    });
    document.querySelector('#total-Bill').textContent = amount ;
    var discounted_amount = 0;
    document.querySelector('#total_bill_amount').textContent = amount;
    document.querySelector('#saved-price').textContent = Math.floor(discounted_amount);
    document.querySelector('#Discounted-Price').textContent = Math.floor(discounted_amount);
    document.querySelector('#checkout_price').textContent = amount;
    document.querySelector('#apl').addEventListener('click',function(){
      var card =  document.querySelector('#discount-coupon-code').value;
      document.querySelector('#apl').disabled = true;
      if(card == 'Masai30'){
        discounted_amount = amount*0.3;
        amount = amount - Math.floor(discounted_amount) ;
        document.querySelector('#total_bill_amount').textContent = amount;
        document.querySelector('#Discounted-Price').textContent = Math.floor(discounted_amount);
        document.querySelector('#checkout_price').textContent = amount;
        document.querySelector('#saved-price').textContent = "saved pice" +" "+Math.floor(discounted_amount);


      }else{
        document.querySelector('#total_bill_amount').textContent = amount;
        document.querySelector('#Discounted-Price').textContent = Math.floor(discounted_amount);
        document.querySelector('#checkout_price').textContent = amount;
        document.querySelector('#saved-price').textContent ="saved pice" +" "+Math.floor(discounted_amount);


      }

    });
    document.querySelector('#CheckOut_Button').addEventListener('click',function(){
      document.querySelector('#CheckOut_Button').hidden = true;
      document.querySelector('#make-payment').hidden = false;
      document.querySelector('#make-payment').style.backgroundColor = 'grey';
      document.querySelector('#order-sum').setAttribute('src','https://www.jiomart.com/msassets/images/icons/orders_review_active.svg');
      document.querySelector('#make-payment').addEventListener('click',function(){
        var obj = {
          price_amount : amount,
        }
        localStorage.setItem('price',JSON.stringify(obj));
        window.location.href = "payment.html";
      })
    });












  function sidenav() {
    document.getElementById("mysidebar").style.width = "330px";
  }
  function closenav() {
    document.getElementById("mysidebar").style.width = "0";
  }
  var personalInfo = JSON.parse(localStorage.getItem('UserDetails')) || [] ;

