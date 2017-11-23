var screenWidth = window.screen.width
var wineElementCount = document.querySelector('.wine-card-block').childElementCount

onload = function () {
    if(screenWidth > 1199){
        document.querySelector('.wine-card-block').style.width=wineElementCount*25+"%"

    }else if(screenWidth > 991){
        document.querySelector('.wine-card-block').style.width=wineElementCount*33.333333+"%"
    }else if(screenWidth > 767){
        document.querySelector('.wine-card-block').style.width=wineElementCount*50+"%"
    }else{
        document.querySelector('.wine-card-block').style.width=wineElementCount*90+"%"
    }
}
var toLeft1 = 0

document.getElementById('wine-arrow-prev').addEventListener('click',function(){
    if(screenWidth < 768){
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 90)+"%"
    }else if(screenWidth > 767 && screenWidth < 992 ){
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 50)+"%"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 33.333333)+"%"
    }else{
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 25)+"%"
    }
})
document.getElementById('wine-arrow-next').addEventListener('click',function(){
    if(screenWidth < 768){
        toLeft1 === wineElementCount - 1  ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 90)+"%"
    }else if(screenWidth > 767 && screenWidth < 992 ){
        toLeft1 === wineElementCount - 2 ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 50)+"%"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft1 === wineElementCount - 3 ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 33.333333)+"%"
    }else{
        toLeft1 === wineElementCount - 4 ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 25)+"%"
    }
})
