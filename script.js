const container = document.querySelector("#container");
const signUp = document.querySelector("#signup");
const signIp = document.querySelector("#signin");

signUp.addEventListener("click", ()=>{
    container.classList.remove("active");
});

signIp.addEventListener("click", ()=>{
    container.classList.add("active");
});