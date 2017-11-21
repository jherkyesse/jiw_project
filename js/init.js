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
    if(window.screen.width > 767){
        var searchbarScrollHeight = document.getElementById('searchbar').scrollHeight
        document.body.onscroll = floatSearchbar
        floatSearchbar.call(searchbarScrollHeight)
    }else{
        document.getElementById('searchbar').classList.add('searchbar-float')
    }
}
var wineElementCount = document.querySelector('.wine-card-block').childElementCount
var wineActivityElementCount = document.getElementById('wine-activity-card-block').childElementCount
var toLeft1 = 0,toLeft2 = 0
var screenWidth = window.screen.width
document.getElementById('wine-arrow-prev').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 90)+"vw"
    }else{
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }
})
document.getElementById('wine-arrow-next').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft1 === wineElementCount - 1  ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 90)+"vw"
    }else if(screenWidth > 766 && screenWidth < 992 ){
        toLeft1 === wineElementCount - 2 ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft1 === wineElementCount - 3 ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }else{
        toLeft1 === 3 ? toLeft1 : toLeft1++
        document.querySelector('div.wine-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }
})

document.getElementById('wine-activity-arrow-prev').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 90)+"vw"
    }else{
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }
})
document.getElementById('wine-activity-arrow-next').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft2 === wineActivityElementCount - 1  ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 90)+"vw"
    }else if(screenWidth > 766 && screenWidth < 992 ){
        toLeft2 === wineActivityElementCount - 2 ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft2 === wineActivityElementCount - 3 ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }else{
        toLeft2 === 2 ? toLeft2 : toLeft2++
        document.getElementById('wine-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }
})