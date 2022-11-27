var companySliderBlocks = document.querySelectorAll('.company-slider-block');
var companySliderBtnLeft = document.querySelector('.company-slider-btn-left');
var companySliderBtnRight = document.querySelector('.company-slider-btn-right');
var companySliderFull = document.querySelector('.company-slider-full');
var companySliderPacman = document.querySelector('.company-slider-pacman');
var pacmanTriangle = companySliderPacman.querySelector('.company-slider-pacman-triangle');

var sliderFirstClone = companySliderBlocks[0].cloneNode(true);
var sliderSecondClone = companySliderBlocks[1].cloneNode(true);
var sliderThirdClone = companySliderBlocks[2].cloneNode(true);
var sliderLastClone = companySliderBlocks[companySliderBlocks.length-1].cloneNode(true);
var sliderPreLastClone = companySliderBlocks[companySliderBlocks.length-2].cloneNode(true);
var sliderPrePreLastClone = companySliderBlocks[companySliderBlocks.length-3].cloneNode(true);

companySliderFull.append(sliderThirdClone);
companySliderFull.append(sliderSecondClone);
companySliderFull.append(sliderFirstClone);
companySliderFull.prepend(sliderLastClone);
companySliderFull.prepend(sliderPreLastClone);
companySliderFull.prepend(sliderPrePreLastClone);

var companySliderBlocks = document.querySelectorAll('.company-slider-block');
var sliderBlockI = (companySliderBlocks.length - 1) / 2;
companySliderBlocks[sliderBlockI].classList.add("active");
var sliderBlockWidth = 560;
var sliderBlockInputAndGap = 50;

companySliderBtnLeft.addEventListener('click', () => {
    if (sliderBlockI == 1) { return; }
    TransitionEnable(companySliderBlocks[sliderBlockI]);
    companySliderBlocks[sliderBlockI].classList.toggle("active");
    sliderBlockI--;
    TransitionEnable(companySliderBlocks[sliderBlockI]);
    companySliderFull.style.transition = "transform 2s";
    companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
    companySliderBlocks[sliderBlockI].classList.toggle("active");

    pacmanTriangle.classList.remove("triangle-active");
    setTimeout(() => {pacmanTriangle.classList.add("triangle-active");}, 10);
    companySliderPacman.style.transform = "translateX(" + (-((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockInputAndGap - 1) + "px)";
    pacmanTriangle.classList.add("triangle-left");
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

    pacmanTriangle.classList.remove("triangle-active");
    setTimeout(() => {pacmanTriangle.classList.add("triangle-active");}, 10);
    companySliderPacman.style.transform = "translateX(" + (-((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockInputAndGap + 1) + "px)";
    pacmanTriangle.classList.remove("triangle-left");
});

companySliderPacman.addEventListener('transitionend', () => {
    pacmanTriangle.classList.remove("triangle-active");
    console.log("a");
})

companySliderFull.addEventListener('transitionend', (e) => {
    if(e.propertyName == "transform"){
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
        console.log("a");
    }
})

companySliderBlocks.forEach(companySliderBlock => {
    TransitionEnable(companySliderBlock);
});

function TransitionDisable(obj){
    obj.style.transition = "width 0s, height 0s, margin 0s";
    obj.querySelector('.company-slider-block-gradient').style.transition = "opacity 0s";
}

function TransitionEnable(obj){
    obj.style.transition = "width 1.5s, height 1.5s, margin 1.5s";
    obj.querySelector('.company-slider-block-gradient').style.transition = "opacity 1.5s";
}