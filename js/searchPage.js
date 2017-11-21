$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 6666,
    values: [ 0, 6666 ],
    slide: function( event, ui ) {
    $("#min-range").val( ui.values[0] );
    $("#max-range").val( ui.values[1] );
    }
});
Array.prototype.map.call(document.querySelectorAll('.select-tag'),function(element,index){
    element.onclick=function(){
        for(var i=0;i<5;i++){
            document.querySelectorAll('.select-tag')[i].classList.remove('select-tag-active')
        }
        this.classList.toggle('select-tag-active')
    }
})
Array.prototype.map.call(document.querySelectorAll('.select-tag-sort'),function(element,index){
    element.onclick = function(){
        for(var i=0;i<2;i++){
            document.querySelectorAll('.select-tag-sort')[i].classList.remove('select-tag-active')
        }
        this.classList.toggle('select-tag-active')
    }
})
document.querySelector('.select-more').onclick = function(){
    document.querySelector('.select-more').style.display='none'
    document.querySelector('.select-reduce').style.display='inline-block'
    var selectHiddenCount = document.querySelectorAll('#select-hidden-menu').length
    for(var i=0;i<selectHiddenCount;i++){
        document.querySelectorAll('#select-hidden-menu')[i].classList.remove('hidden')
    }
}
document.querySelector('.select-reduce').onclick = function(){
    document.querySelector('.select-reduce').style.display='none'
    document.querySelector('.select-more').style.display='inline-block'
    var selectHiddenCount = document.querySelectorAll('#select-hidden-menu').length
    for(var i=0;i<selectHiddenCount;i++){
        document.querySelectorAll('#select-hidden-menu')[i].classList.add('hidden')
    }
}
Array.prototype.map.call(document.querySelectorAll('.search-class'),function(element,index){
    element.onclick = function(){
        for(var i=0;i<6;i++){
            document.querySelectorAll('.search-class')[i].classList.remove('search-class-active')
            document.querySelectorAll('#select-subblock')[i].classList.add('hidden')
        }
        document.querySelectorAll('.search-class')[index].classList.add('search-class-active')
        document.querySelectorAll('#select-subblock')[index].classList.remove('hidden')
    }
})
Array.prototype.map.call( document.querySelectorAll('.search-selection-block ul li:nth-child(1)'),function(element,index){
    element.onclick=function(){
        document.querySelectorAll('.search-selection-block ul li:nth-child(2)')[index].classList.toggle('hidden-xs')
    }
})