let input = document.getElementById('number');
let input1 = document.getElementById('number1');
let button = document.querySelector('button');

function int(int1, int2){
    int1 = parseInt(input.value)
    int2 = parseInt(input1.value)
    return int1 + Math.floor(Math.random() * (int2 - int1 + 1))
}

button.addEventListener("click", () => {
    let x = int()
    alert(x);
});

document.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        let x = int()
        alert(x);
    }
})

