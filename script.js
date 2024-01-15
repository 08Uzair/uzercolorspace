const colorInput = document.querySelectorAll(".colors input")
const preview = document.querySelector("body")
const direction = document.querySelectorAll(".arrows i")
const random = document.querySelector(".generate button")
const copyButton = document.querySelector(".generate li ")
const copyIcon = document.querySelector(".generate li i");
var dir ="left top";
const button = document.querySelectorAll(".colors span")
const randomCol=()=>{
    const colorRandom = Math.floor(Math.random()* 0xffffff).toString(16)
    return `#${colorRandom}`
}
const generateColor = (isRandom) => {
    if (isRandom) {
        colorInput[0].value = randomCol() 
        colorInput[1].value = randomCol() 
        colorInput[2].value = randomCol() 
    }
    const gradient = `linear-gradient(to ${dir} , ${colorInput[0].value}, ${colorInput[1].value}, ${colorInput[2].value})`;
    preview.style.background = gradient
    button[0].innerText= colorInput[0].value
    button[1].innerText= colorInput[1].value
    button[2].innerText= colorInput[2].value
 copyfunc(gradient)    
}


const changeDir = () => {
    direction.forEach((i) => {
        i.addEventListener("click", () => {
            dir = i.id;
         generateColor(false)
        });
    });
};
const copyfunc = (gradient) => {
    navigator.clipboard.writeText(gradient)
    copyIcon.classList.add("bxs-copy");
    setTimeout(()=>{
        copyIcon.classList.remove("bxs-copy");
    },1000);
}
changeDir()
colorInput.forEach((input) => {
    input.addEventListener("input",()=> generateColor(false))
})
random.addEventListener("click",()=>generateColor(true))
copyButton.addEventListener("click",copyfunc)

