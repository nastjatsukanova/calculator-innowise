import { createButtons,changeSign, equal, rootOfTwo, rootOfThree, plus, minus, multiply, devide, percent, createNumberButtons, createSimpleButtons } from "./utils"
createButtons();
createNumberButtons();
createSimpleButtons();

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
    if (!isOperation) {
    rootOfTwo();
};
});

buttonRootOfThree.addEventListener("click", () => {
    if (!isOperation) {
    rootOfThree();
};
});

buttonRootOfY.addEventListener("click", () => {
    if (!isOperation) {
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
    if (!isOperation) {
    changeSign(Number(inputValue.value));
    };
});

buttonPowerOfTwo.addEventListener("click", () => {
    if (!isOperation) {
        inputValue.value = customMath.powerOfTwo(inputValue.value);
    };  
});

buttonPowerOfThree.addEventListener("click", () => {
    if (!isOperation) {
        inputValue.value = customMath.powerOfThree(inputValue.value);
    };
});

buttonTenInPower.addEventListener("click", () => {
    if (!isOperation) {
        inputValue.value = customMath.tenInPower(inputValue.value);
    };
});

buttonPowerOfY.addEventListener("click", () => {
    if (!isOperation) {
    const power = (e) => {
        inputValue.value = inputValue.value.slice(0,inputValue.value.length-1) ** (e.target.value);
        numberButtons.forEach(item => item.removeEventListener("click", power));
    }
    numberButtons.forEach(item => item.addEventListener("click", power));
};
});

buttonofFactorial.addEventListener("click", () => {
    if (!isOperation) {
        inputValue.value = customMath.factorial(inputValue.value);
    };
});


buttonPlus.addEventListener("click",() => {
    if (!isOperation) {
        plus();
        isOperation = true;
    };
});

buttonMinus.addEventListener("click", () => {
    if (!isOperation) {
        minus();
        isOperation = true;
    }
});

buttonMultiply.addEventListener("click", () => {
    if (!isOperation) {
        multiply();
        isOperation = true;
    }
});

buttonDevide.addEventListener("click", () => {
    if (!isOperation) {
        devide();
        isOperation = true;
    }
});

buttonPercent.addEventListener("click", () => {
    if (!isOperation) {
        percent();
    }
});

buttonEqual.addEventListener("click", equal);

saveToStorage.addEventListener("click", () => {
    if (!isOperation) {
        localStorage.setItem("storageValue", inputValue.value);
    };
});

readFromStorage.addEventListener("click", () => {
    if (!isOperation) {
        inputValue.value = localStorage.getItem("storageValue");
    } else {
        inputValue.value = inputValue.value + localStorage.getItem("storageValue");
    };
});

cleanStorage.addEventListener("click", () => {
    localStorage.setItem("storageValue", "")
});

storagePlusNumber.addEventListener("click", () => {
    if (!isOperation) {
        inputValue.value = Number(localStorage.getItem("storageValue")) + Number(inputValue.value);
    };
});

storageMinusNumber.addEventListener("click", () => {
    if (!isOperation) {
        inputValue.value = Number(localStorage.getItem("storageValue")) - Number(inputValue.value);
    };
});
