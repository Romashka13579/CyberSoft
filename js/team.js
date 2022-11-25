// var teamPeopleCard = document.querySelector('.team-people-card');
// var teamPeopleCards = document.querySelector('.team-people-cards');

// var CardNameArray = ["Макаренко Максим", "В'ячеслав Лапін", "Лапін Єгор", "Берчук Павло", "Ярослав Старжинський"];
// var CardIconArray = ["Maks.jfif", "Vyacheslav.jfif", "Egor.jfif", "Pasha.jfif", "Yarik.jfif"];
// var CardImageArray = ["Макаренко Максим", "В'ячеслав Лапін", "Лапін Єгор", "Берчук Павло", "Ярослав Старжинський"];
// var CardLinkArray = [1, 0, 0, 1, 1];
// var CardLink1Array = ["github.png", "instagram.png", "figma.png", "telegram.png"];
// var CardHrefsArray = ["https://github.com/MakarenkoMaxim", "https://github.com/Berchuk", "https://github.com/YaroslavStarzhynsky"];
// var hrefs = 0;

// for (var i = 0; i < CardNameArray.length; i++) {
//     var teamPeopleCardClone = teamPeopleCard.cloneNode(true);
//     teamPeopleCardClone.querySelector('.team-people-card-name').innerHTML = CardNameArray[i];
//     teamPeopleCardClone.querySelector('.team-people-card-icon').style.background = "url(img/" + CardIconArray[i] + ") center/cover";
//     teamPeopleCards.append(teamPeopleCardClone);
//     for (var j = 0; j < 4; j++) {
//         if (CardLinkArray[i] > j) {
//             teamPeopleCardClone.querySelector('.link-' + (j + 1) + '').style.background = "url(img/" + CardLink1Array[j] + ") center/cover";
//             teamPeopleCardClone.querySelector('.link-' + (j + 1) + '').href = CardHrefsArray[(hrefs)];
//             hrefs++;
//         }
//         else {
//             teamPeopleCardClone.querySelector('.link-' + (j + 1) + '').style.display = "none";
//         }
//     }
// }

var teamPeopleCards = document.querySelectorAll('.team-people-card');

window.addEventListener('scroll', Scrolling);

Scrolling();
console.log(teamPeopleCards.length);

function Scrolling() {
    for (var i = 0; i < teamPeopleCards.length; i++) {
        var teamPeopleCardTrigger = (window.innerHeight - 100);
        var teamPeopleCardTop = teamPeopleCards[i].getBoundingClientRect().top;
        if (teamPeopleCardTop < teamPeopleCardTrigger) {
            Checking(i);
        }
    }
}

function Checking(i) {
    var teamPeopleCards = document.querySelectorAll('.team-people-card');
    var main = document.querySelector('.main');

    if (main.offsetWidth > 1790) {
        if (i % 4 == 0) { teamPeopleCards[i].classList.add('show'); }
        else if (i % 4 == 1) { setTimeout(() => { teamPeopleCards[i].classList.add('show'); }, 150); }
        else if (i % 4 == 2) { setTimeout(() => { teamPeopleCards[i].classList.add('show'); }, 300); }
        else if (i % 4 == 3) { setTimeout(() => { teamPeopleCards[i].classList.add('show'); }, 450); }
    }
    else if (main.offsetWidth <= 970) {
        teamPeopleCards[i].classList.add('show');
    }
    else if (main.offsetWidth <= 1380) {
        if (i % 2 == 0) { teamPeopleCards[i].classList.add('show'); }
        else if (i % 2 == 1) { setTimeout(() => { teamPeopleCards[i].classList.add('show'); }, 150); }
    }
    else if (main.offsetWidth <= 1790) {
        if (i % 3 == 0) { teamPeopleCards[i].classList.add('show'); }
        else if (i % 3 == 1) { setTimeout(() => { teamPeopleCards[i].classList.add('show'); }, 150); }
        else if (i % 3 == 2) { setTimeout(() => { teamPeopleCards[i].classList.add('show'); }, 300); }
    }
}

// var teamPeopleCards = document.querySelectorAll('.team-people-card');
// var overlays = document.querySelectorAll('.overlay');

// for (let i = 0; i < teamPeopleCards.length; i++) {
//     teamPeopleCards[i].addEventListener('click', () => {
//         overlays[i].style.display = "flex";
//     });
// }

// for (let i = 0; i < overlays.length; i++) {
//     overlays[i].addEventListener('click', () => {
//         overlays[i].style.display = "none";
//     });
// }

var teamPeopleCards = document.querySelectorAll('.team-people-card');

teamPeopleCards.forEach(teamPeopleCard => {
    teamPeopleCard.addEventListener('click', () => {
        teamPeopleCard.classList.toggle("active");
    });
});