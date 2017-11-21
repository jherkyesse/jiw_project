document.getElementById('add-address').onclick=function(){
    document.querySelector('.add-new-address-block').classList.toggle('hidden')
    document.body.style.overflow='hidden'
}
document.getElementById('close-new-address-block').onclick=function(){
    document.querySelector('.add-new-address-block').classList.toggle('hidden')
    document.body.style.overflow='auto'
}
