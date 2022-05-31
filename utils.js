import { CustomMath } from "./math";
let inputValue = document.querySelector('.input');
const numberButtons = Array.from(document.querySelectorAll('.number'));

const customMath = new CustomMath();

export const sumOfOperations = (value) => {
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

export const changeSign = (value) => {
    if (value === "0") {
        inputValue.value = "0";
    };
    if (Number(value) > 0) {
        inputValue.value = String(customMath.change(Number(value)));
    } 
    else inputValue.value = String(customMath.change(Number(value)));
};

export const equal = () => {
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
};

export const rootOfTwo = () => {
    if(Number(inputValue.value) < 0) {
        inputValue.value = "Error";
    }
    else inputValue.value = customMath.sqrt(inputValue.value);
}

export const rootOfThree = () => {
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

export const plus = () => {
    inputValue.value = inputValue.value + "+";
    sumOfOperations(inputValue.value);
};

export const minus = () => {
    inputValue.value = inputValue.value + "-";
    sumOfOperations(inputValue.value);
};

export const multiply = () => {
    inputValue.value = inputValue.value + "*";
    sumOfOperations(inputValue.value);
};

export const devide = () => {
    inputValue.value = inputValue.value + ":";
    sumOfOperations(inputValue.value);
};

export const percent = () => {
    inputValue.value = inputValue.value + "%";
    sumOfOperations(inputValue.value);
}

export const createButtons = () => {
    const functionalButtonsValue = [
                                {value:"MS", class:"save"}, 
                                {value:"MR", class:"read"}, 
                                {value:"MC", class: "storage_clean"}, 
                                {value:"M+", class: "storage_plus"}, 
                                {value:"M-", class: "storage_minus"},  
                                {value:"&#8730", class: "root_2"},
                                {value:"&#8731", class: "root_3"},
                                {value:"&#8732", class: "root_y"}, 
                                {value:"%", class: "percent"},
                                {value:"+/-", class: "change"}, 
                                {value: "x<sup>2</sup>", class:"power_of_2"},
                                {value: "x<sup>3</sup>", class:"power_of_3"},
                                {value: "x<sup>y</sup>", class:"power_of_y"},
                                {value: "10<sup>x</sup>", class:"power_of_ten"},
                                {value: "x!", class: "factorial"},
                                {value: "AC", class: "clear"}
                                ];
    functionalButtonsValue.forEach(item => {
    let buttonsBlock = document.querySelector(".buttons_functional");
    let buttons = document.createElement("button");
    buttons.setAttribute("class", "functional" + ` ${item.class}`);
    buttons.innerHTML = item.value;
    buttonsBlock.appendChild(buttons);
});
};

export const createNumberButtons = () => {
    const numberButtonsValue = [7,8,9,4,5,6,1,2,3,0, "="];
    numberButtonsValue.forEach(item => {
    let buttonsBlock = document.querySelector(".buttons_numbers");
    let buttons = document.createElement("button");
    if (item ==="=") {
        buttons.setAttribute("class", "simple equal");
    } else {
        buttons.setAttribute("class", "number");
    }
    buttons.innerHTML = item;
    buttons.value = "" + item;
    buttonsBlock.appendChild(buttons);
    if (item === 0) {
        buttons.setAttribute("class", "number zero");
    }
});
};

export const createSimpleButtons = () => {
    const simpleButtonsValue = [
                                {value: "+", class:"plus"},
                                {value: "-", class:"minus"},
                                {value: "*", class:"multiply"},
                                {value: ":", class:"devide"}
                            ];
    simpleButtonsValue.forEach(item => {
        let buttonsBlock = document.querySelector(".buttons_simple");
        let buttons = document.createElement("button");
        buttons.setAttribute("class", "simple" + ` ${item.class}`);
        buttons.innerHTML = item.value;
        buttonsBlock.appendChild(buttons);
    });                  
};
