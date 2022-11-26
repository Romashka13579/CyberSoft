var companySliderBlocks = document.querySelectorAll('.company-slider-block');
var companySliderBtnLeft = document.querySelector('.company-slider-btn-left');
var companySliderBtnRight = document.querySelector('.company-slider-btn-right');
var companySliderFull = document.querySelector('.company-slider-full');
var sliderBlockI = (companySliderBlocks.length - 1) / 2;
companySliderBlocks[sliderBlockI].classList.toggle("active");
var sliderBlockWidth = 640;

companySliderBtnLeft.addEventListener('click', () => {
    if(sliderBlockI == 0){return;}
    companySliderBlocks[sliderBlockI].classList.toggle("active");
    sliderBlockI--;
    companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
    companySliderBlocks[sliderBlockI].classList.toggle("active");
});

companySliderBtnRight.addEventListener('click', () => {
    if(sliderBlockI == companySliderBlocks.length - 1){return;}
    companySliderBlocks[sliderBlockI].classList.toggle("active");
    sliderBlockI++;
    companySliderFull.style.transform = "translateX(" + (((companySliderBlocks.length - 1) / 2 - sliderBlockI) * sliderBlockWidth) + "px)";
    companySliderBlocks[sliderBlockI].classList.toggle("active");
});

companySliderBlocks.forEach(companySliderBlock => {
    companySliderBlock.style.transition = "width 1.5s, height 1.5s, margin 1.5s";
    companySliderBlock.querySelector('.company-slider-block-gradient').style.transition = "opacity 1.5s";
});