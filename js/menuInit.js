var allwinemenuclickCount=0;
var allwinedropmenuclickCount=0

document.getElementById('navmenustart').addEventListener('click',function(){
    document.getElementById('navmenuclose').onclick=function(){
        document.getElementById('nav-menu-icon').classList.toggle('navbar-menu-span')
        document.getElementById('nav-menu').classList.toggle('hidden-xs')
    }

    document.getElementById('all-wine-menu').onclick = function () {
        allwinemenuclickCount == 0 ? allwinemenuclickCount++ : allwinemenuclickCount++
        allwinemenuclickCount == 1 ? document.getElementById('nav-submenu').classList.toggle('hidden-xs') : ''
        allwinemenuclickCount == 0 ? document.querySelector('.navbar-menu ul li').style.marginTop = '0' : document.querySelector('.navbar-menu ul li').style.marginTop = '-60px'
        document.getElementById('nav-menu-icon').classList.add('navbar-menu-span-all')
        document.getElementById('navmenuback').onclick = function () {
            allwinemenuclickCount = 0
            allwinedropmenuclickCount = 0
            allwinemenuclickCount == 0 ? document.getElementById('nav-submenu').classList.toggle('hidden-xs') : ''
            allwinemenuclickCount == 0 ? document.querySelector('.navbar-menu ul li').style.marginTop = '0' : ''
            document.getElementById('nav-menu-icon').classList.toggle('navbar-menu-span-all')
        }

        Array.prototype.map.call(document.querySelectorAll('li#all-wine-dropmenu'), function (element, index) {
            element.onclick = function () {
                for(var i=0;i<6;i++){
                    i==index ? "" : document.querySelectorAll('li#all-wine-dropmenu')[i].children[2].classList.add('hidden-xs')
                }
                allwinedropmenuclickCount == 0 ? allwinedropmenuclickCount++ : allwinedropmenuclickCount--
                document.querySelectorAll('li#all-wine-dropmenu')[index].children[2] ? document.querySelectorAll('li#all-wine-dropmenu')[index].children[2].classList.toggle('hidden-xs') : ""
                document.querySelectorAll('li#all-wine-dropmenu')[index].children[1] && allwinedropmenuclickCount == 1 ? document.querySelectorAll('li#all-wine-dropmenu')[index].children[1].style.transform = 'rotate(-90deg)' : document.querySelectorAll('li#all-wine-dropmenu')[index].children[1].style.transform = 'rotate(90deg)'
            }
        })
    }
    document.getElementById('nav-menu-icon').classList.toggle('navbar-menu-span')
    document.getElementById('nav-menu').classList.toggle('hidden-xs')
})

Array.prototype.map.call(document.querySelectorAll('.cart-list-item-delete'),function(element,index){
    element.onclick=function(){
        document.querySelectorAll('.cart-list-item-box')[index].style.display='none'
        document.getElementById('navbar-cart-count').textContent--
    }
})
Array.prototype.map.call(document.querySelectorAll('.cart-list-item-reduce'),function(element,index){
    element.onclick=function(){
        document.querySelectorAll('.cart-list-item-count')[index].value == 1 ? "" : document.querySelectorAll('.cart-list-item-count')[index].value--
    }
})
Array.prototype.map.call(document.querySelectorAll('.cart-list-item-add'),function(element,index){
    element.onclick=function(){
        document.querySelectorAll('.cart-list-item-count')[index].value++
    }
})
document.querySelector('.cart-list-item-all-delete-btn').onclick=function(){
    document.querySelector('.cart-list-item-box-block').innerHTML=''
    document.getElementById('navbar-cart-count').innerHTML=''
}
document.querySelector('.navbar-cart > a:nth-child(3)').onclick=function(){
    document.querySelector('.cart-list').classList.toggle('d-none')
}