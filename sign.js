var numArr = JSON.parse(localStorage.getItem('DataBase')) || [] ;
  var personalInfo = JSON.parse(localStorage.getItem('UserDetails')) || [] ;


  document.querySelector('#Gotp').addEventListener('click',otpValidate);
  document.querySelector('#sign-up-page').addEventListener('click',function(){
    signInForm();
  });

    function otpValidate(){
        var mobNum = document.querySelector('#mob').value ;


        if(mobNum.length == 10){

            document.querySelector('#otpnum').value="";
                numArr.map(function(elem){

                    if(Number(mobNum) == Number(elem.mobile)){

                        if(personalInfo.length>1){
                          personalInfo.length = 0;
                        }
                        document.getElementById('Gotp').hidden = true;
                        document.querySelector('#loginbtn').hidden = false ;
                        document.querySelector('#otp').hidden = false ;
                        FormData();
                        document.querySelector('#loginbtn').addEventListener('click',function(){
                            var check = document.querySelector('#otpnum').value;
                            if( check == 123456){
                              personalInfo.push(elem);

                              localStorage.setItem('UserDetails',JSON.stringify(personalInfo) )
                              var person = JSON.parse(localStorage.getItem('UserDetails')) || [] ;
                              document.querySelector('#hello_text').textContent = person[0].Fname || 'Hello Signin';
                              document.querySelector('#signin_text').textContent =person[0].Fname || 'signup';
                                window.location.href ='Product.html';
                            }
                            else{
                              alert('enter valid OTP')
                            }
                        })
                    }
                });
        }
        else {

          if(mobNum == 007 ){
            FormData()

            document.getElementById('Gotp').hidden = true;
            document.querySelector('#loginbtn').hidden = false ;
            document.querySelector('#otp').hidden = false ;
            document.querySelector('#loginbtn').addEventListener('click',function(){
            var check = document.querySelector('#otpnum').value;
              if( check == 007){
                window.location.href ='admin.html';
              }
              else{
                alert('check your Number');
              }

            });

          }
          else{
            alert('check your number')
          }
        }
    }
    function FormData(){

        document.querySelector('#numRemoval').textContent = "Change";

        document.querySelector('#numRemoval').addEventListener('click',function(){

            document.querySelector('#signininfo').innerHTML = "please enter your details.";
            document.querySelector('#mob').value = "";
            document.querySelector('#numRemoval').textContent = "";
            document.querySelector('#form').hidden = true ;
            document.querySelector('#otp').hidden = true ;
            document.getElementById('Gotp').hidden = false;
            document.getElementById('loginbtn').hidden = true;
        });
    }

    function signInForm(){

        document.querySelector('#form').hidden = false ;
        document.getElementById('Gotp').hidden = true;
        document.querySelector('#loginbtn').hidden = false ;
        document.querySelector('#otp').hidden = false ;
        document.querySelector('#name').value ="";
        document.querySelector('#email').value ="";
        document.querySelector('#Date').value ="";
        document.querySelector('#gen').value ="";
        document.querySelector('#otpnum').value ="";
        var mobNum = document.querySelector('#mob').value ;


        FormData();

        document.querySelector('#loginbtn').addEventListener('click',function(){

            var name = document.querySelector('#name').value;
            var email = document.querySelector('#email').value;
            var gender = document.querySelector('#gen').value;
            var dob = document.querySelector('#Date').value;
            var check = document.querySelector('#otpnum').value ;
            var details = {
                Fname : name,
                mail : email,
                Gen : gender,
                dateOfBirth : dob,
                mobile : mobNum ,
            };

            if(check == 123456){

                numArr.push(details);
                localStorage.setItem('DataBase',JSON.stringify(numArr));

                window.location.href = 'account.html';
                var person = JSON.parse(localStorage.getItem('UserDetails')) || [] ;
                    document.querySelector('#hello_text').textContent = person[0].Fname || 'Hello Signin';
                    document.querySelector('#signin_text').textContent =person[0].Fname || 'signup';

            }
            else{
                alert('check the details again');
            }

        });
    }

    document.querySelector('.terms').addEventListener('click', function(){
        window.location.href ='Terms.html'
    });

    document.querySelector('.privacy').addEventListener('click', function(){
        window.location.href ='Privacy.html'
    });


    // FROM HERE NAVBAR SCRIPT
  document.querySelector('#hello_button').addEventListener('click',function(){
    window.location.href = 'account.html';
  });
  document.querySelector('#signin_text').addEventListener('click',function(){
    window.location.href = 'account.html';
  });
  document.querySelector('#loction_icon').addEventListener('click',function(){
    window.location.href = 'https://www.google.com/maps';
  });



  function sidenav() {
    document.getElementById("mysidebar").style.width = "330px";
  }
  function closenav() {
    document.getElementById("mysidebar").style.width = "0";
  }
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
