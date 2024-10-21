let slogan = document.querySelector(".slogan");
slogan.style.backgroundImage = 'url("img/inn1.png")';
window.setInterval(changeImage, 5000);
function changeImage(){
    if(slogan.style.backgroundImage == 'url("img/inn1.png")'){
        slogan.style.backgroundImage = 'url("img/inn2.png")'; 
    }
    else if(slogan.style.backgroundImage == 'url("img/inn2.png")'){
        slogan.style.backgroundImage = 'url("img/inn3.png")'; 
    }
    else if(slogan.style.backgroundImage == 'url("img/inn3.png")'){
        slogan.style.backgroundImage = 'url("img/inn1.png")'; 
    }
}