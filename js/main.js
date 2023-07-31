let box=document.querySelector('.box');
let btn=document.querySelector('.btn');
box.innerHTML=`<h1 class="info p-5 text-center w-50">Welcome ${sessionStorage.getItem('name')}</h1>`;
btn.addEventListener('click',function(){
    sessionStorage.removeItem('name');
    location.href="signin.html";
})