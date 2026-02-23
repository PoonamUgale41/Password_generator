const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
const copyIconE1 = document.querySelector(".fa-copy")
const alertCointainerE1 = document.querySelector(".alert-cointainer")
btnE1.addEventListener("click", ()=>{
    createPassword()
})

copyIconE1.addEventListener("click",()=>{
    copyPassword();
    if(inputE1.value){
    alertCointainerE1.classList.remove("active");
    setTimeout(()=>{
     alertCointainerE1.classList.add("active");
    }, 2000);
}
});
function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14;
    let password =""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        
    }
inputE1.value = password;
alertCointainerE1.innerText = password + " copied!"
}
 function copyPassword() {
    inputE1.select();
    inputE1.setSelectionRange(0, 9999);
    navigator.clipboard.writeText
    (inputE1.value);
    
}