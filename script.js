const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("click", ()=>{
    createPassword()
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14;
    let passsword =""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        passsword += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, passsword);
    }
}