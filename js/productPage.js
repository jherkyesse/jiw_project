document.querySelector('.new-winelist-btn').onclick=function(){
    document.querySelector('.new-winelist-sub').classList.toggle('hidden')
}
document.querySelector('.new-wine-cancel-btn').onclick=function(){
    document.querySelector('.new-winelist-sub').classList.add('hidden')
}

document.querySelector('.product-new-winelist > img').onclick=function(){
    document.querySelector('.new-winelist').classList.toggle('hidden-xs')
}

function scrollToRelatedWinelist(){
    scrollTo(document.documentElement, document.getElementById('related-winelist').offsetTop-120)
    document.querySelector('.product-add-cart-btn').style.position='fixed'
    document.querySelector('.product-add-cart-btn').style.top='110px'
    document.querySelector('.product-add-cart-btn').style.right='10px'
}
function scrollTo(element, to) {
    if (element.scrollTop+10 >= to) return;
    var difference = to  - element.scrollTop;
    var perTick = difference / 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop+perTick >= to) return;
        scrollTo(element, to);
    }, 10);
}