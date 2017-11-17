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
var exploreElementCount = document.querySelector('.explore-card-block').childElementCount
var exploreActivityElementCount = document.getElementById('explore-activity-card-block').childElementCount
var toLeft1 = 0,toLeft2 = 0
var screenWidth = window.screen.width
document.getElementById('explore-arrow-prev').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.explore-card-block').style.marginLeft = -(toLeft1 * 90)+"vw"
    }else{
        toLeft1 <= 0 ? toLeft1 : toLeft1--
        document.querySelector('div.explore-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }
})
document.getElementById('explore-arrow-next').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft1 === exploreElementCount - 1  ? toLeft1 : toLeft1++
        document.querySelector('div.explore-card-block').style.marginLeft = -(toLeft1 * 90)+"vw"
    }else if(screenWidth > 766 && screenWidth < 992 ){
        toLeft1 === exploreElementCount - 2 ? toLeft1 : toLeft1++
        document.querySelector('div.explore-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft1 === exploreElementCount - 3 ? toLeft1 : toLeft1++
        document.querySelector('div.explore-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }else{
        toLeft1 === 3 ? toLeft1 : toLeft1++
        document.querySelector('div.explore-card-block').style.marginLeft = -(toLeft1 * 292.5)+"px"
    }
})

document.getElementById('explore-activity-arrow-prev').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('explore-activity-card-block').style.marginLeft = -(toLeft2 * 90)+"vw"
    }else{
        toLeft2 <= 0 ? toLeft2 : toLeft2--
        document.getElementById('explore-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }
})
document.getElementById('explore-activity-arrow-next').addEventListener('click',function(){
    if(screenWidth < 767){
        toLeft2 === exploreActivityElementCount - 1  ? toLeft2 : toLeft2++
        document.getElementById('explore-activity-card-block').style.marginLeft = -(toLeft2 * 90)+"vw"
    }else if(screenWidth > 766 && screenWidth < 992 ){
        toLeft2 === exploreActivityElementCount - 2 ? toLeft2 : toLeft2++
        document.getElementById('explore-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }else if(screenWidth > 991 && screenWidth < 1200 ){
        toLeft2 === exploreActivityElementCount - 3 ? toLeft2 : toLeft2++
        document.getElementById('explore-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }else{
        toLeft2 === 2 ? toLeft2 : toLeft2++
        document.getElementById('explore-activity-card-block').style.marginLeft = -(toLeft2 * 292.5)+"px"
    }
})
document.getElementById('nav-menu-icon').addEventListener('click',function(){
    /* init */
    document.querySelector('.navbar-menu ul li').style.marginTop = '0'
    document.getElementById('nav-submenu').style.display = 'none'
    for(var i=0;i<6;i++){
        document.querySelectorAll('li#all-wine-dropmenu')[i].style.display = 'block'
        document.querySelectorAll('li#all-wine-dropmenu')[i].children[2].style.display = 'none'
        document.querySelectorAll('li#all-wine-dropmenu')[i].children[1].style.transform = 'rotate(90deg)'
    }
    /* init */
    document.getElementById('all-wine-menu').onclick = function(){
        document.getElementById('nav-submenu').style.display = 'block'
        document.querySelector('.navbar-menu ul li').style.marginTop = '-60px'


            Array.prototype.map.call(document.querySelectorAll('li#all-wine-dropmenu'),function(element,index){
                element.onclick = function(){
                for(var i=0;i<6;i++){
                    document.querySelector('#nav-submenu').children[i].children[2].style.display = 'none'
                    document.querySelectorAll('li#all-wine-dropmenu')[i].style.display = 'none'
                }
                document.querySelectorAll('li#all-wine-dropmenu')[index].children[2] ? document.querySelectorAll('li#all-wine-dropmenu')[index].children[2].style.display = 'block' : ""
                document.querySelectorAll('li#all-wine-dropmenu')[index].children[1] ? document.querySelectorAll('li#all-wine-dropmenu')[index].children[1].style.transform = 'rotate(-90deg)' : ""
                document.querySelectorAll('li#all-wine-dropmenu')[index].style.display = 'block'
            }
            })

    }
    document.getElementById('nav-menu-icon').classList.toggle('navbar-menu-span')
    document.getElementById('nav-menu').classList.toggle('hidden-xs')
})

