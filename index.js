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







// function calc(){
//     let n1 = parseFloat(document.getElementById('n1').value);
//     let n2 = parseFloat(document.getElementById('n2').value);
//     let oper = parseFloat(document.getElementById('operators').value);

//      if(oper === '+'){
//         document.getElementById('result').value = n1 + n2;
//      }
//     else if(oper === '-'){
//         document.getElementById('result').value = n1 - n2;
//      }
//     else if(oper === '/'){
//         document.getElementById('result').value = n1 / n2;
//      }
//      else if(oper === '*'){
//         document.getElementById('result').value = n1 * n2;
//      }

// }

// console.log(calc());