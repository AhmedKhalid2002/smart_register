let email=document.getElementById('email');
let password=document.getElementById('password');
let btn=document.querySelector('.sign button');
let message=document.getElementById('message');
let arr=[];
arr=JSON.parse(localStorage.getItem('userDetail'));

btn.addEventListener('click',login);

function login(){
    for(let i=0;i<arr.length;i++){
        if(localStorage.getItem('userDetail')==null){
            message.innerHTML='User not found'
        }else{
            if(email.value==arr[i].email&&password.value==arr[i].password){
                sessionStorage.setItem('name',arr[i].name)
                window.location.href = "index.html";
            }else{
                message.innerHTML='User not found'
                message.style.color='red'
            }
        }
    }
}

console.log(arr[0].email);
console.log(arr[0].password);