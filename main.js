let inputValue = document.querySelector('.input');
const numberButtons = Array.from(document.querySelectorAll('.number'));
const buttonClear = document.querySelector('.clear');
const buttonRootOfTwo = document.querySelector('.root_2');
const buttonRootOfThree = document.querySelector('.root_3');
const buttonRootOfY = document.querySelector(".root_y");
const buttonChange = document.querySelector('.change');
const buttonPowerOfTwo = document.querySelector('.power_of_2');
const buttonPowerOfThree = document.querySelector('.power_of_3');
const buttonPowerOfY = document.querySelector('.power_of_y');
const buttonTenInPower = document.querySelector(".power_of_ten")
const buttonofFactorial = document.querySelector('.factorial');
const buttonPlus = document.querySelector(".plus");
const buttonMultiply = document.querySelector(".multiply");
const buttonMinus = document.querySelector(".minus");
const buttonDevide = document.querySelector(".devide");
const buttonEqual = document.querySelector(".equal");
const saveToStorage = document.querySelector(".save");
const readFromStorage = document.querySelector(".read");
const cleanStorage = document.querySelector(".storage_clean");
const storagePlusNumber = document.querySelector(".storage_plus");
const storageMinusNumber = document.querySelector(".storage_minus");
const buttonPercent = document.querySelector(".percent");
import { CustomMath } from "./math";
import "./styles.css"

let isOperation;
const customMath = new CustomMath();
numberButtons.map(item => {
    item.addEventListener("click", (e) => {
        isOperation =  false;
        if (inputValue.value === "0") {
            inputValue.value = e.target.value;
        }
        else inputValue.value += e.target.value;
    });
});

buttonClear.addEventListener("click",() => {
    inputValue.value = "0";
});

buttonRootOfTwo.addEventListener("click", () => {
    if (isOperation === false) {
    if(Number(inputValue.value) < 0) {
        inputValue.value = "Error";
    }
    else inputValue.value = customMath.sqrt(inputValue.value)
};
});

buttonRootOfThree.addEventListener("click", () => {
    if (isOperation === false) {
    let result;
    if (Number(inputValue.value) < 0){
        result = 0 - customMath.rootOfThree(inputValue.value.slice(1));
    } else {
        result = customMath.rootOfThree(inputValue.value);
    }; 
    if((Number(result).toFixed() ** 3) === Number(inputValue.value)) {
        inputValue.value = result.toFixed();
    } else {
        inputValue.value = result;
    };
};
});

buttonRootOfY.addEventListener("click", () => {
    if (isOperation === false) {
    const root = (e) => {
        if (e.target.value % 2 === 1 ){
            let result;
        if (Number(inputValue.value) < 0){
            result = 0 - ((0 - inputValue.value.slice(0,inputValue.value.length-1)) ** (1/e.target.value));
        } else {
            result = (inputValue.value.slice(0,inputValue.value.length-1) ** (1/e.target.value));
        }; 
        if((Number(result).toFixed() ** (e.target.value)) === Number(inputValue.value)) {
            inputValue.value = result.toFixed();
        } else {
            inputValue.value = result;
        };
        } else {
            inputValue.value = inputValue.value.slice(0,inputValue.value.length-1) ** (1/(e.target.value));
        };
        numberButtons.forEach(item => item.removeEventListener("click", root));
    };
    numberButtons.forEach(item => item.addEventListener("click", root));
};
});

buttonChange.addEventListener("click", () => {
    if (isOperation === false) {
    if (inputValue.value === "0") {
        inputValue.value = "0";
    };
    if (Number(inputValue.value) > 0) {
        inputValue.value = String(customMath.change(Number(inputValue.value)));
    } 
    else inputValue.value = String(customMath.change(Number(inputValue.value)));
};
});

buttonPowerOfTwo.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = customMath.powerOfTwo(inputValue.value);
    };  
});

buttonPowerOfThree.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = customMath.powerOfThree(inputValue.value);
    };
});

buttonTenInPower.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = customMath.tenInPower(inputValue.value);
    };
});

buttonPowerOfY.addEventListener("click", () => {
    if (isOperation === false) {
    const power = (e) => {
        inputValue.value = inputValue.value.slice(0,inputValue.value.length-1) ** (e.target.value);
        numberButtons.forEach(item => item.removeEventListener("click", power));
    }
    numberButtons.forEach(item => item.addEventListener("click", power));
};
});

buttonofFactorial.addEventListener("click", () => {
    if (isOperation === false) {
    inputValue.value = customMath.factorial(inputValue.value);
    };
});

const sumOfOperations = (value) => {
    let sumOfSigns = value.split("").reduce((acc, item) => {
        if (item === "+" || item === "-" || item === ":" || item === "*" || item === "%"){
            return acc += 1;
        };
        return acc;
    },0);
    if (sumOfSigns > 1) {
        let signs = value.split("").map(item => {
            if (item !== ".") {
                if(isNaN(Number(item))){
                    return item;
                };
            };
        }).filter(item => item !== undefined);
        let array = value.split(signs[0])
        .map(item =>{
            item = String(parseFloat(item));
            if(!isNaN(+item)){
                return item;
            };
        }).filter(item => typeof item === 'string');
        switch(signs[0]){
            case "+":
                inputValue.value = Number(array[0]) + Number(array[1]) + signs[1];
                break;
            case "-":
                inputValue.value = Number(array[0]) - Number(array[1]) + signs[1];
                break; 
            case "*":
                inputValue.value = (Number(array[0]) * Number(array[1])) + signs[1];
                break;
            case ":":
                if (Number(array[1]) === 0){
                    inputValue.value = "Error"
                } else {
                    inputValue.value = (Number(array[0]) / Number(array[1])) + signs[1];
                }
                break;
            case "%" :
                inputValue.value = array[0]/100 + signs[1];  
                break;   
        };
    };
};

buttonPlus.addEventListener("click",() => {
    if (isOperation === false) {
        inputValue.value = inputValue.value + "+";
        sumOfOperations(inputValue.value);
        isOperation = true;
    }
});

buttonMinus.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = inputValue.value + "-";
        sumOfOperations(inputValue.value);
        isOperation = true;
    }
});

buttonMultiply.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = inputValue.value + "*";
        sumOfOperations(inputValue.value);
        isOperation = true;
    }
});

buttonDevide.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = inputValue.value + ":";
        sumOfOperations(inputValue.value);
        isOperation = true;
    }
});

buttonPercent.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = inputValue.value + "%";
        sumOfOperations(inputValue.value);
    }
});

buttonEqual.addEventListener("click", () => {
    let arrayOfElements = inputValue.value.split('')
    let operation = arrayOfElements.reduce((acc,item) => {
        if (item !== ".") {
            if(isNaN(Number(item))){
                acc = item
                return acc;
            };
        };
        return acc;
    }, "");
    let array = inputValue.value.split(operation).map(item => +item);
        switch(operation){
            case "+":
                inputValue.value = array.reduce((acc,item) => acc + item, 0);
                break;
            case "-":
                inputValue.value = array[0] - array[1];
                break; 
            case "*":
                inputValue.value = array.reduce((acc,item) => acc * item, 1);
                break;
            case ":":
                if (array[1] === 0) {
                    inputValue.value = 'Error'
                } else {
                    inputValue.value = array[0]/array[1];
                }
                break;
            case "%" :
                inputValue.value = array[0]/100;  
                break;  
            default :
                inputValue.value = "0";    
        };
});

saveToStorage.addEventListener("click", () => {
    if (isOperation === false) {
        localStorage.setItem("storageValue", inputValue.value);
    };
});

readFromStorage.addEventListener("click", () => {
    inputValue.value = inputValue.value + localStorage.getItem("storageValue");
});

cleanStorage.addEventListener("click", () => {
    localStorage.setItem("storageValue", "")
});

storagePlusNumber.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = Number(localStorage.getItem("storageValue")) + Number(inputValue.value);
    };
});

storageMinusNumber.addEventListener("click", () => {
    if (isOperation === false) {
        inputValue.value = Number(localStorage.getItem("storageValue")) - Number(inputValue.value);
    };
});

