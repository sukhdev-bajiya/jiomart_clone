


//// ============== Check Login or not ===================================== ///

setInterval(function () {
  if(false){
    document.getElementById("where_address_div").style.display = "none";
    document.getElementById("my_address_div").style.display = "block";
  }else{
    document.getElementById("where_address_div").style.display = "block";
    document.getElementById("my_address_div").style.display = "none";
  }
},200);



///============== JS FOR LOCATION  POPUP =================== \\



function ShowlocationPopup() {
  document.getElementById("location_popup_section").style.display = "block";
}


function HidelocationPopup() {
  document.getElementById("location_popup_section").style.display = "none";
}


///============== JS FOR Slider Menu =================== \\



function ShowSideSliderMenu(){
  document.getElementById("slide_menu_slider_section").style.display = "block";
  document.getElementById("slide_menu_slider_section").style.width = "100%";
}

function CloseSlideMenuSlider(){
  document.getElementById("slide_menu_slider_section").style.display = "none";
}




