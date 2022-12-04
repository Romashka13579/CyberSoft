var navbarRigthBurgerMenu = document.querySelector('.navbar-rigth-burger-menu');
var navbarTelphoneVersion = document.querySelector('.navbar-telphone-version')

navbarRigthBurgerMenu.addEventListener('click', () => {
    if (navbarTelphoneVersion.offsetHeight == "0") {
        navbarTelphoneVersion.style.height = "100vh";
        document.querySelector('.navbar-rigth-burger-menu-icon-3').style.transform = "translateY(-14px) rotate(45deg)";
        document.querySelector('.navbar-rigth-burger-menu-icon-1').style.transform = "translateY(14px) rotate(-45deg)";
        document.querySelector('.navbar-rigth-burger-menu-icon-2').style.opacity = 0;
    }
    else {
        navbarTelphoneVersion.style.height = "0vh";
        document.querySelector('.navbar-rigth-burger-menu-icon-3').style.transform = "rotate(0deg) translateY(0px)";
        document.querySelector('.navbar-rigth-burger-menu-icon-1').style.transform = "rotate(0deg) translateY(0px)";
        document.querySelector('.navbar-rigth-burger-menu-icon-2').style.opacity = 1;
    }
});

var flagsArray = ["POL.webp", "ENG.svg", "DTH.svg", "FRN.webp", "SWD.webp"];
var languageBlockSwitchedFlags = document.querySelectorAll('.language-block-switched-flag');

for (let j = 0; j < flagsArray.length; j++) {
    languageBlockSwitchedFlags[j + 1].style.background = "url(img/" + flagsArray[j] + ") center/cover";
}

var languageBlockOptions = document.querySelectorAll('.language-block-option');
var languageBlockSwitched = document.querySelector('.language-block-switched');

languageBlockOptions.forEach(languageBlockOption => {
    languageBlockOption.addEventListener('click', () => {
        var switchedTxt = languageBlockSwitched.querySelector('.language-block-switched-txt');
        var switchedTxtClone = switchedTxt.cloneNode(true);
        var optionTxt = languageBlockOption.querySelector('.language-block-switched-txt');
        var optionTxtClone = optionTxt.cloneNode(true);
        switchedTxt.parentNode.replaceChild(optionTxtClone, switchedTxt);
        optionTxt.parentNode.replaceChild(switchedTxtClone, optionTxt);

        var switchedFlag = languageBlockSwitched.querySelector('.language-block-switched-flag');
        var switchedFlagClone = switchedFlag.cloneNode(true);
        var optionFlag = languageBlockOption.querySelector('.language-block-switched-flag');
        var optionFlagClone = optionFlag.cloneNode(true);
        switchedFlag.parentNode.replaceChild(optionFlagClone, switchedFlag);
        optionFlag.parentNode.replaceChild(switchedFlagClone, optionFlag);
    });
});

var themeOptions = document.querySelectorAll('.theme-option');
var themeOptions1 = document.querySelector('.theme-options');
var themeChosen = document.querySelector('.theme-chosen');

function ThemeStorage(theme){
    localStorage.setItem("theme", theme.id);
}

function ThemeStorageCheck(){
    var storageTheme = localStorage.getItem("theme");
    themeOptions1.querySelectorAll('.theme-option').forEach(themeOption => {
        if(storageTheme === themeOption.id){
            var themeChosenOption = themeChosen.querySelector('.theme-option');
            console.log(themeChosenOption);
            themeChosen.append(themeOption);
            themeOptions1.prepend(themeChosenOption);
        }
    });
    document.documentElement.className = storageTheme;
}

themeOptions.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        ThemeStorage(themeOption);
        ThemeStorageCheck();
    });
});

ThemeStorageCheck();