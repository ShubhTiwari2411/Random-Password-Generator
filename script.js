document.addEventListener('DOMContentLoaded',()=>{

 const btn=document.getElementById('btn')
 const input=document.getElementById('password')
 const copy=document.querySelector('.fa-copy')
 const alertDiv=document.querySelector('.alert-container')

 function createPassword(){
  const chars= "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength=14;
  let password=""
  for(let i=0;i<passwordLength;i++)
  {
    const randomNo=Math.floor(Math.random()*chars.length)
    password+=chars.substring(randomNo,randomNo+1);
  }
  input.value=password;
  alertDiv.innerText=password + "copied"

 }

 function copyPassword(){
  input.select();
  input.setSelectionRange(0,9999)
  navigator.clipboard.writeText(input.value)
 }

 btn.addEventListener('click',()=>{
  createPassword()
 })

 copy.addEventListener('click',()=>{
  copyPassword();
  if(input.value)
  {
    alertDiv.classList.remove("active")
    setTimeout(()=>{
      alertDiv.classList.add("active")
    },2000)
  }
 })
 
 




})