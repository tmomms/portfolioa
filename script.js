const button = Array.from(document.getElementsByClassName("button_n"));
const numberDelete = Array.from(document.getElementsByClassName("delete"));
const operation = Array.from(document.getElementsByClassName("blue"));
const field = document.getElementById("id_p");

button.map((arr) => {
  arr.addEventListener("click", () => {
    if (field.innerHTML === "0") {
      field.innerHTML = arr.innerText;
    } else if (field.innerHTML !== "0") {
      field.innerHTML += arr.innerText;
    }
  });
});

numberDelete.map((arr) => {
  arr.addEventListener("click", () => {
    if (arr.innerHTML === "ac") {
      field.innerHTML = 0;
    } 
    else if (arr.innerHTML === "X" && field.innerHTML.length !== 1) {
      field.innerHTML = field.innerHTML.split("").slice(0, -1).join('');
    }
    else{field.innerHTML = 0}
  });
});

operation.map((arr) => {
    
})


function addit(a,b) {
    return +a + +b
}

function substract(a,b) {
    return a - b
}

function multiply(a,b){
    return a * b
}

function division(a,b) {
    return a / b
}



let arr = [1,2,3,4,5]
arr.pop()
console.log(arr);