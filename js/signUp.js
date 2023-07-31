let userName=document.getElementById('name');
let userEmail=document.getElementById('email');
let userPassword=document.getElementById('password');
let btn=document.querySelector('.signUp button');
let paraName=document.getElementById('paraName');
let paraEmail=document.getElementById('paraEmail');
let paraPassword=document.getElementById('paraPassword');
let para=document.getElementById('para');
let exName=/[A-Z][a-z]{2,}$/;
let exEmail=/^[A-Za-z0-9]{1,}@(gmail|yahoo)\.com$/;
let exPass=/[A-Za-z0-9@#$^&*]{6,}/
let regName=new RegExp(exName);
let regEmail=new RegExp(exEmail);
let regPass=new RegExp(exPass);
let userArr;
if(localStorage.getItem('userDetail')!=null){
    userArr=JSON.parse(localStorage.getItem('userDetail'))
}else{
    userArr=[];
}
btn.addEventListener("click",getData)
function getData(){
    var userObj={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    if(userName.value.match(regName)&&userEmail.value.match(regEmail)&&userPassword.value.match(regPass)){
        para.innerHTML='Valid';
        para.style.color="green"
        userArr.push(userObj);
        localStorage.setItem('userDetail',JSON.stringify(userArr));
        clearData();
    }else{
        if(!userName.value.match(regName)){
            paraName.innerHTML='not valid name start capital letter';
            paraName.style.color="red"
        }else if(!userEmail.value.match(regEmail)){
            paraEmail.innerHTML='Email not valid';
            paraEmail.style.color="red"
        }else if(!userPassword.value.match(regPass)){
            paraPassword.innerHTML='Password not valid length greater 6 (character number @#$^&* )';
            paraPassword.style.color="red"
        }
    }
}

function clearData(){
    userName.value='';
    userEmail.value='';
    userPassword.value='';
    paraName.innerHTML='';
    paraEmail.innerHTML='';
    paraPassword.innerHTML='';
}