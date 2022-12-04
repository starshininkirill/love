let openBtn = document.getElementById('button')
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close')

openBtn.addEventListener('click',function(){
   modal.classList.add('modal-open')
})
closeBtn.addEventListener('click',function(){
   modal.classList.remove('modal-open')
})