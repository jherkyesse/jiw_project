Array.prototype.map.call(document.querySelectorAll('.cart-menu'),function(element,index){
    element.onclick=function(){
        document.querySelectorAll('.cart-menu')[0].classList.remove('cart-menu-active')
        document.querySelectorAll('.cart-menu')[1].classList.remove('cart-menu-active')
        document.querySelectorAll('.cart-menu')[index].classList.toggle('cart-menu-active')
    }
})