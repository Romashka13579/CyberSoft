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
    if (actualBlocks[i + 2].id === "actual-third-clone") {
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

function HtmlCssProjectLeft(obj) {
    obj.style.left = "" + (-390 * i) + "px";
}


var orderbarBlocksType = document.querySelectorAll('.orderbar-block-type');

orderbarBlocksType.forEach(orderbarBlockType => {
    orderbarBlockType.setAttribute('size', orderbarBlockType.getAttribute('placeholder').length);
});



var orderbarBlockDropdown = document.querySelector('.orderbar-block-dropdown');
var orderbarDropdownMenu = document.querySelector('.orderbar-dropdown-menu');
var orderbarDropdownTxt = document.querySelector('.orderbar-block-dropdown-txt')

orderbarBlockDropdown.addEventListener('focus', () => {
    orderbarDropdownMenu.style.display = "flex";
    setTimeout(() => {
        orderbarDropdownMenu.style.opacity = 1;
    }, 10);
});

orderbarBlockDropdown.addEventListener('focusout', () => {
    orderbarDropdownMenu.style.opacity = 0;
});

orderbarDropdownMenu.addEventListener('transitionend', () => {
    if (orderbarDropdownMenu.style.opacity == 0) {
        orderbarDropdownMenu.style.display = "none";
    }
});

var orderbarDropdownMenuItems = document.querySelectorAll('.orderbar-dropdown-menu-item');

orderbarDropdownMenuItems.forEach(orderbarDropdownMenuItem => {
    orderbarDropdownMenuItem.addEventListener('click', () => {
        orderbarDropdownTxt.innerHTML = orderbarDropdownMenuItem.innerHTML;
    });
});

var orderbarBlockDropdown2 = document.querySelector('.orderbar-block-dropdown-2');
var orderbarDropdownMenu2 = document.querySelector('.orderbar-dropdown-menu-2');
var orderbarDropdownTxt2 = document.querySelector('.orderbar-block-dropdown-txt-2');

orderbarBlockDropdown2.addEventListener('focus', () => {
    orderbarDropdownMenu2.style.display = "flex";
    setTimeout(() => {
        orderbarDropdownMenu2.style.opacity = 1;
    }, 10);
});

orderbarBlockDropdown2.addEventListener('focusout', () => {
    orderbarDropdownMenu2.style.opacity = 0;
});

orderbarDropdownMenu2.addEventListener('transitionend', () => {
    if (orderbarDropdownMenu2.style.opacity == 0) {
        orderbarDropdownMenu2.style.display = "none";
    }
});

var orderbarDropdownMenuItems2 = document.querySelectorAll('.orderbar-dropdown-menu-item-2');

orderbarDropdownMenuItems2.forEach(orderbarDropdownMenuItem2 => {
    orderbarDropdownMenuItem2.addEventListener('click', () => {
        orderbarDropdownTxt2.innerHTML = orderbarDropdownMenuItem2.innerHTML;
    });
});

var orderbarBtn = document.querySelector('.orderbar-btn');
var orderbarBlockType = document.querySelector('.orderbar-block-type');
var orderbarBlockType2 = document.querySelector('.orderbar-block-type-2');

orderbarBtn.addEventListener('click', () => {
    console.log(orderbarDropdownTxt.innerHTML, orderbarDropdownTxt2.innerHTML, orderbarBlockType.value, orderbarBlockType2.value);
    orderbarDropdownTxt.innerHTML = "Тип проектy";
    orderbarDropdownTxt2.innerHTML = "Ціна проекту";
    orderbarDropdownTxt.value = "";
    orderbarDropdownTxt2.value = "";
});