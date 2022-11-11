var actualBtnLeft = document.querySelector('.actual-slider-top-btnleft');
var actualBtnRight = document.querySelector('.actual-slider-top-btnright');
var actualOverflow = document.querySelector('.actual-slider-main-overflow');
var actualFull = document.querySelector('.actual-slider-main-full');
var actualBlocks = document.querySelectorAll('.actual-slider-main-block');

var i = 3;

var actualFirstClone = actualBlocks[0].cloneNode(true);
var actualSecondClone = actualBlocks[1].cloneNode(true);
var actualThirdClone = actualBlocks[2].cloneNode(true);
var actualLastFirstClone = actualBlocks[actualBlocks.length - 1].cloneNode(true);
var actualLastSecondClone = actualBlocks[actualBlocks.length - 2].cloneNode(true);
var actualLastThirdClone = actualBlocks[actualBlocks.length - 3].cloneNode(true);

actualThirdClone.id = "actual-third-clone";
actualLastThirdClone.id = "actual-last-third-clone";

actualFull.append(actualFirstClone);
actualFull.append(actualSecondClone);
actualFull.append(actualThirdClone);
actualFull.prepend(actualLastFirstClone);
actualFull.prepend(actualLastSecondClone);
actualFull.prepend(actualLastThirdClone);

var actualBlocks = document.querySelectorAll('.actual-slider-main-block');

actualFull.addEventListener('transitionend', () => {
    var actualBlocks = document.querySelectorAll('.actual-slider-main-block');
    if (actualBlocks[i+2].id === "actual-third-clone") {
        actualFull.style.transition = "none";
        i = 3;
        HtmlCssProjectLeft(actualFull);
    }
    if (actualBlocks[i].id === "actual-last-third-clone") {
        actualFull.style.transition = "none";
        i = actualBlocks.length - 6;
        HtmlCssProjectLeft(actualFull);
    }
});

actualBtnLeft.addEventListener('click', () => {
    if (i <= 0) { return; }
    i--;
    HtmlCssProjectLeft(actualFull);
    actualFull.style.transition = "1s";
});

actualBtnRight.addEventListener('click', () => {
    var actualBlocks = document.querySelectorAll('.actual-slider-main-block');
    if (i >= actualBlocks.length - 3) { return; }
    i++;
    HtmlCssProjectLeft(actualFull);
    actualFull.style.transition = "1s";
});

function HtmlCssProjectLeft(obj){
    obj.style.left = "" + (-390 * i) + "px";
}