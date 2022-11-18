var teamPeopleCard = document.querySelector('.team-people-card');
var teamPeopleCards = document.querySelector('.team-people-cards');

var CardNameArray = ["Макаренко Максим", "В'ячеслав Лапін", "Лапін Єгор", "Берчук Павло", "Ярослав Старжинський"];
var CardIconArray = ["Maks.jfif", "Vyacheslav.jfif", "Egor.jfif", "Pasha.jfif", "Yarik.jfif"];
var CardImageArray = ["Макаренко Максим", "В'ячеслав Лапін", "Лапін Єгор", "Берчук Павло", "Ярослав Старжинський"];
var CardLinkArray = [1, 0, 0, 1, 1];
var CardLink1Array = ["github.png", "instagram.png", "figma.png", "telegram.png"];
var CardHrefsArray = ["https://github.com/MakarenkoMaxim", "https://github.com/Berchuk", "https://github.com/YaroslavStarzhynsky"];
var hrefs = 0;

for(var i = 0; i < CardNameArray.length; i++){
    var teamPeopleCardClone = teamPeopleCard.cloneNode(true);
    teamPeopleCardClone.querySelector('.team-people-card-name').innerHTML = CardNameArray[i];
    teamPeopleCardClone.querySelector('.team-people-card-icon').style.background = "url(img/"+CardIconArray[i]+") center/cover";
    for(var j = 0; j < 4; j++){
        if(CardLinkArray[i] > j){
            teamPeopleCardClone.querySelector('.link-'+(j+1)+'').style.background = "url(img/"+CardLink1Array[j]+") center/cover";
            document.querySelector('.link-'+(j+1)+'').href = CardHrefsArray[(hrefs)];
            hrefs++;
        }
        else{
            teamPeopleCardClone.querySelector('.link-'+(j+1)+'').style.display = "none";
        }
    }
    teamPeopleCards.append(teamPeopleCardClone);
}