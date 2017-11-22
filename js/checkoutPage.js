document.getElementById('add-address').onclick=function(){
    document.querySelector('.add-new-address-block').classList.toggle('d-none')
    document.body.style.overflow='hidden'
}
document.getElementById('close-new-address-block').onclick=function(){
    document.querySelector('.add-new-address-block').classList.toggle('d-none')
    document.body.style.overflow='auto'
}