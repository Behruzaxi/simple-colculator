const n1 = document.querySelector('.n1');
const n2 = document.querySelector('.n2');

const submit = document.querySelector('#submit');
const asign =  document.querySelector('#asign');
const result = document.querySelector('#result');

submit.addEventListener("click", () => {
    let finalResult;

    const firstNumber = n1.value
    const secondNumber = n2.value
    const operation = asign.value

    if(operation == "+") {
        finalResult = Number(firstNumber) + Number(secondNumber)
    }
    else if(operation == "-"){
        finalResult = Number(firstNumber) - Number(secondNumber)
    }
    else if(operation == "*"){
        finalResult = Number(firstNumber) * Number(secondNumber)
    }
    else if(operation == "/"){
        finalResult = Number(firstNumber) / Number(secondNumber)
    }



    result.innerHTML = finalResult
})






