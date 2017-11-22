var screenWidth = window.screen.width
var wineElementCount = document.querySelector('.wine-card-block').childElementCount
var wineActivityElementCount = document.getElementById('wine-activity-card-block').childElementCount
function floatSearchbar(){
    /*if (floatSearchbar.float) {
        return; 
    }*/
    var searchbar = document.getElementById('searchbar')
    var searchbarScrollHeight = document.getElementById('searchbar').offsetTop
    var screenScrollTop = document.documentElement.scrollTop
    floatSearchbar.float = screenScrollTop - searchbarScrollHeight > 60
    floatSearchbar.float ? searchbar.classList.add('searchbar-float') : searchbar.classList.remove('searchbar-float')
}
onload = function () {
    if(screenWidth > 1199){
        var searchbarScrollHeight = document.getElementById('searchbar').scrollHeight
        document.body.onscroll = floatSearchbar
        floatSearchbar.call(searchbarScrollHeight)
        document.querySelector('.wine-card-block').style.width=wineElementCount*25+"%"
        document.getElementById('wine-activity-card-block').style.width=wineActivityElementCount*25+"%"
    }else if(screenWidth > 991){
        var searchbarScrollHeight = document.getElementById('searchbar').scrollHeight
        document.body.onscroll = floatSearchbar
        floatSearchbar.call(searchbarScrollHeight)
        document.querySelector('.wine-card-block').style.width=wineElementCount*33.333333+"%"
        document.getElementById('wine-activity-card-block').style.width=wineActivityElementCount*33.333333+"%"
    }else if(screenWidth > 767){
        var searchbarScrollHeight = document.getElementById('searchbar').scrollHeight
        document.body.onscroll = floatSearchbar
        floatSearchbar.call(searchbarScrollHeight)
        document.querySelector('.wine-card-block').style.width=wineElementCount*50+"%"
        document.getElementById('wine-activity-card-block').style.width=wineActivityElementCount*50+"%"
    }else{
        document.querySelector('.wine-card-block').style.width=wineElementCount*90+"%"
        document.getElementById('wine-activity-card-block').style.width=wineActivityElementCount*90+"%"
        document.getElementById('searchbar').classList.add('searchbar-float')
    }
}
var toLeft1 = 0,toLeft2 = 0


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

document.getElementById('wine-activity-arrow-prev').addEventListener('click',function(){
    if(screenWidth < 768){
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 90)+"vw"
    }else if(screenWidth > 766 && screenWidth < 992 ){
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 50)+"%"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 33.333333)+"%"
    }else{
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 25)+"%"
    }
})
document.getElementById('wine-activity-arrow-next').addEventListener('click',function(){
    if(screenWidth < 768){
        toLeft2 === wineActivityElementCount - 1  ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 90)+"vw"
    }else if(screenWidth > 766 && screenWidth < 992 ){
        toLeft2 === wineActivityElementCount - 2 ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 50)+"%"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft2 === wineActivityElementCount - 3 ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 33.333333)+"%"
    }else{
        toLeft2 === 2 ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 25)+"%"
    }
})