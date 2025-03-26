let title = document.title;
window.addEventListener('blur', ()=>{
    document.title = "Please comeback😢";
})

window.addEventListener('focus', ()=>{
    document.title = title;
})


let string = ""
let button = document.querySelectorAll("button")
Array.from(button).forEach((button) => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '='){
            try{
                string = eval(string)
                document.querySelector("input").value = string
            }catch(error){
                string = "Syntax error"
                document.querySelector("input").value = string
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector("input").value = string
        }
        
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string
        }
    })
});