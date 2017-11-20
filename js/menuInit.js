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