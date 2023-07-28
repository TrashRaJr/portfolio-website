
var slideIndex = 0;
autoSlideshow();

function autoSlideshow() {
    var i;
    var x = document.getElementsByClassName("slideshow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(autoSlideshow, 3000);
    }

function openNav() {
    document.getElementById("main").style.marginLeft = "210px";
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("my-pic").style.width = "160px";
    let elements = document.getElementsByClassName('side-btn');
    for(var i=0; i<elements.length; i++) { 
        if (i==0){
            elements[i].innerHTML='Home';}
        else if (i==1){
            elements[i].innerHTML='Skills';
            }
        else if (i==2)
            elements[i].innerHTML='Experience';
        else
            elements[i].innerHTML='Projects';
    }
    document.getElementById("nav-name").innerHTML = "Bhavana Kumar"
}

function closeNav() {
    document.getElementById("main").style.marginLeft = "80px";
    document.getElementById("mySidenav").style.width = "70px";
    document.getElementById("my-pic").style.width = "50px";
    let elements = document.getElementsByClassName("side-btn");
    for(var i=0; i<elements.length; i++) { 
        elements[i].innerHTML='<img src="home.png" class="nav-img">';
    }
    document.getElementById("nav-name").innerHTML = "BK"
}