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
var languageFlags = document.querySelectorAll('.language-flag');

for (let j = 0; j < flagsArray.length; j++) {
    languageFlags[j + 1].style.background = "url(img/" + flagsArray[j] + ") center/cover";
}

var languageOptions = document.querySelectorAll('.language-option');
var languageOptions1 = document.querySelector('.language-options');
var languageChosen = document.querySelector('.language-chosen');

function LanguageStorage(language){
    localStorage.setItem("language", language.id);
}

function LanguageStorageCheck(){
    var storageLanguage = localStorage.getItem("language");
    languageOptions1.querySelectorAll('.language-option').forEach(languageOption => {
        if(storageLanguage === languageOption.id){
            var languageChosenOption = languageChosen.querySelector('.language-option');
            console.log(languageChosenOption);
            languageChosen.append(languageOption);
            languageOptions1.prepend(languageChosenOption);
        }
    });
}

languageOptions.forEach(languageOption => {
    languageOption.addEventListener('click', () => {
        LanguageStorage(languageOption);
        LanguageStorageCheck();
    });
});

LanguageStorageCheck();

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