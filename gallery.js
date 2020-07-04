/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  var newpic = previewPic.src;
  
  
  document.querySelector("#image").style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById('image').innerHTML = previewPic.alt;
  
  
  
  //document.write(newpic);
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    
    document.querySelector("#image").style.backgroundImage = "url('https://i.pinimg.com/originals/c8/a3/51/c8a351c6801c380c9bb6ec40bf870fd1.jpg')";
    document.getElementById("image").innerHTML = "Hover to view. Click to display";
		
	}

  function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

 function togglePopup1(){
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup2(){
  document.getElementById("popup-3").classList.toggle("active");
}

function togglePopup3(){
  document.getElementById("popup-4").classList.toggle("active");
}

function togglePopup4(){
  document.getElementById("popup-5").classList.toggle("active");
}

function togglePopup5(){
  document.getElementById("popup-6").classList.toggle("active");
}

function togglePopup6(){
  document.getElementById("popup-7").classList.toggle("active");
}

function togglePopup7(){
  document.getElementById("popup-8").classList.toggle("active");
}

function togglePopup8(){
  document.getElementById("popup-9").classList.toggle("active");
}

function togglePopup9(){
  document.getElementById("popup-10").classList.toggle("active");
}




