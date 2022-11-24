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

// var themeInside = document.querySelector('.theme-inside');
// var languageInside = document.querySelector('.language-inside');
// var themeBlockOption = document.querySelector('.theme-block-option');
// var languageBlockOptions = document.querySelectorAll('.language-block-option');

// themeInside.addEventListener('mouseover', () => {
//     document.querySelector('.theme-block-switched').style.borderRadius = "0px";
//     themeBlockOption.style.display = "flex";
//     setTimeout(() => {
//         themeBlockOption.style.opacity = 1;
//     }, 10);
// });
// themeInside.addEventListener('mouseout', () => {
//     document.querySelector('.theme-block-switched').style.borderTopLeftRadius = "5px";
//     themeBlockOption.style.opacity = 0;
// });
// themeBlockOption.addEventListener('transitionend', () => {
//     if (themeBlockOption.style.opacity == 0) {
//         themeBlockOption.style.display = "none";
//     }
// });

// var islanguage = false;
// var d = 0;

// languageInside.addEventListener('mouseover', () => {
//     document.querySelector('.language-block-switched').style.borderRadius = "0px";
//     islanguage = true;
//     BlockOptions();
// });
// languageInside.addEventListener('mouseout', () => {
//     document.querySelector('.language-block-switched').style.borderBottomLeftRadius = "5px";
//     islanguage = false;
//     BlockOptions();
// });
// function BlockOptions() {
//     if (islanguage == true) {
//         languageBlockOptions[d].style.display = "flex";
//         setTimeout(() => {
//             languageBlockOptions[d].style.opacity = 1;
//         }, 10);
//     }
//     else if (islanguage == false) {
//         languageBlockOptions[d].style.opacity = 0;
//     }
// }
// languageBlockOptions.forEach(languageBlockOption => {
//     languageBlockOption.addEventListener('transitionend', () => {
//         if (languageBlockOption.style.opacity == 0) {
//             languageBlockOption.style.display = "none";
//         }
//         if(islanguage == true && d < languageBlockOptions.length-1){
//             d++;
//             BlockOptions();
//         }
//         else if(islanguage == false && d > 0){
//             d--;
//             BlockOptions();
//         }
//     });
// });

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

var themeBlockOption = document.querySelector('.theme-block-option');
var themeBlockSwitched = document.querySelector('.theme-block-switched');

themeBlockOption.addEventListener('click', () => {
    var switchedTxt = themeBlockSwitched.querySelector('.theme-block-switched-txt');
    var switchedTxtClone = switchedTxt.cloneNode(true);
    var optionTxt = themeBlockOption.querySelector('.theme-block-switched-txt');
    var optionTxtClone = optionTxt.cloneNode(true);
    switchedTxt.parentNode.replaceChild(optionTxtClone, switchedTxt);
    optionTxt.parentNode.replaceChild(switchedTxtClone, optionTxt);

    var switchedColor = themeBlockSwitched.querySelector('.theme-block-switched-color');
    var switchedColorClone = switchedColor.cloneNode(true);
    var optionColor = themeBlockOption.querySelector('.theme-block-switched-color');
    var optionColorClone = optionColor.cloneNode(true);
    switchedColor.parentNode.replaceChild(optionColorClone, switchedColor);
    optionColor.parentNode.replaceChild(switchedColorClone, optionColor);
});