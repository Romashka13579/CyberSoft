var companySliderBlocks = document.querySelectorAll('.company-slider-block');
var companySliderBtnLeft = document.querySelector('.company-slider-btn-left');
var companySliderBtnRight = document.querySelector('.company-slider-btn-right');
var companySliderFull = document.querySelector('.company-slider-full');
var companySliderRadiobtns = document.querySelectorAll('.company-slider-radiobtn');

var sliderFirstClone = companySliderBlocks[0].cloneNode(true);
var sliderSecondClone = companySliderBlocks[1].cloneNode(true);
var sliderThirdClone = companySliderBlocks[2].cloneNode(true);
var sliderLastClone = companySliderBlocks[companySliderBlocks.length - 1].cloneNode(true);
var sliderPreLastClone = companySliderBlocks[companySliderBlocks.length - 2].cloneNode(true);
var sliderPrePreLastClone = companySliderBlocks[companySliderBlocks.length - 3].cloneNode(true);

sliderFirstClone.id = "slider-first-clone";
sliderFirstClone.id = "slider-secon-clone";
sliderFirstClone.id = "slider-third-clone";
sliderFirstClone.id = "slider-last-clone";
sliderFirstClone.id = "slider-prelast-clone";
sliderFirstClone.id = "slider-preprelast-clone";

companySliderFull.append(sliderThirdClone);
companySliderFull.append(sliderSecondClone);
companySliderFull.append(sliderFirstClone);
companySliderFull.prepend(sliderLastClone);
companySliderFull.prepend(sliderPreLastClone);
companySliderFull.prepend(sliderPrePreLastClone);

var companySliderBlocks = document.querySelectorAll('.company-slider-block');
var sliderBlockI = (companySliderBlocks.length - 1) / 2;
companySliderBlocks[sliderBlockI].classList.add("active");
companySliderRadiobtns[sliderBlockI - 3].checked = true;
var sliderBlockWidth = 560;

companySliderBtnLeft.addEventListener('click', () => {
    if (sliderBlockI == 1) { return; }
    TransitionEnable(companySliderBlocks[sliderBlockI]);
    companySliderBlocks[sliderBlockI].classList.toggle("active");
    sliderBlockI--;
    TransitionEnable(companySliderBlocks[sliderBlockI]);
    companySliderFull.style.transition = "transform 2s";
    companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
    companySliderBlocks[sliderBlockI].classList.toggle("active");
    if (3 <= sliderBlockI) { companySliderRadiobtns[sliderBlockI - 3].checked = true; }
    else { companySliderRadiobtns[sliderBlockI + companySliderRadiobtns.length - 3].checked = true; }
});

companySliderBtnRight.addEventListener('click', () => {
    if (sliderBlockI == companySliderBlocks.length - 2) { return; }
    TransitionEnable(companySliderBlocks[sliderBlockI]);
    companySliderBlocks[sliderBlockI].classList.toggle("active");
    sliderBlockI++;
    TransitionEnable(companySliderBlocks[sliderBlockI]);
    companySliderFull.style.transition = "transform 2s";
    companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
    companySliderBlocks[sliderBlockI].classList.toggle("active");
    if (companySliderRadiobtns.length > sliderBlockI - 3) { companySliderRadiobtns[sliderBlockI - 3].checked = true; }
    else { companySliderRadiobtns[sliderBlockI - (3 + companySliderRadiobtns.length)].checked = true; }
});

companySliderFull.addEventListener('transitionend', (e) => {
    if (e.propertyName == "transform") {
        if (sliderBlockI == 1) {
            TransitionDisable(companySliderBlocks[sliderBlockI]);
            companySliderBlocks[sliderBlockI].classList.toggle("active");
            sliderBlockI = companySliderBlocks.length - 5;
            TransitionDisable(companySliderBlocks[sliderBlockI]);
            companySliderBlocks[sliderBlockI].classList.toggle("active");
            companySliderFull.style.transition = "transform 0s";
            companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
        }
        else if (sliderBlockI == companySliderBlocks.length - 2) {
            TransitionDisable(companySliderBlocks[sliderBlockI]);
            companySliderBlocks[sliderBlockI].classList.toggle("active");
            sliderBlockI = 4;
            TransitionDisable(companySliderBlocks[sliderBlockI]);
            companySliderBlocks[sliderBlockI].classList.toggle("active");
            companySliderFull.style.transition = "transform 0s";
            companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
        }
    }
});

companySliderRadiobtns.forEach(companySliderRadiobtn => {
    companySliderRadiobtn.addEventListener('click', () => {
        for (let k = 0; k < companySliderRadiobtns.length; k++) {
            if (companySliderRadiobtn == companySliderRadiobtns[k]) {
                var k1 = k;
            }
        }
        TransitionEnable(companySliderBlocks[sliderBlockI]);
        companySliderBlocks[sliderBlockI].classList.toggle("active");
        sliderBlockI = k1 + 3;
        TransitionEnable(companySliderBlocks[sliderBlockI]);
        companySliderFull.style.transition = "transform 2s";
        companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
        companySliderBlocks[sliderBlockI].classList.toggle("active");
    });
});


companySliderBlocks.forEach(companySliderBlock => {
    TransitionEnable(companySliderBlock);
});

function TransitionDisable(obj) {
    obj.style.transition = "width 0s, height 0s, margin 0s";
    obj.querySelector('.company-slider-block-gradient').style.transition = "opacity 0s";
}

function TransitionEnable(obj) {
    obj.style.transition = "width 1.5s, height 1.5s, margin 1.5s";
    obj.querySelector('.company-slider-block-gradient').style.transition = "opacity 1.5s";
}