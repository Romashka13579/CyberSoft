var navbarRigthBurgerMenu = document.querySelector('.navbar-rigth-burger-menu');
isBurgerMenu = false;

navbarRigthBurgerMenu.addEventListener('click', () => {
    if(isBurgerMenu == false){
        document.querySelector('.navbar-telphone-version').style.display = "block";
        isBurgerMenu = true;
    }
    else{
        document.querySelector('.navbar-telphone-version').style.display = "none";
        isBurgerMenu = false;
    }
});