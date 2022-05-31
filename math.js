export class CustomMath {
    constructor(){}
    
    sqrt(value){
        return value ** (1/2);
    }
    rootOfThree(value){
        return value ** (1/3);
    }
    change(value){
        return 0 - value;
    } 
    powerOfTwo(value){
        return value ** 2;
    }
    powerOfThree(value){
        return value ** 3;
    }
    tenInPower(value){
        return 10 ** value;
    }
    factorial(value){
        let result = 1;
     for (let i = 1; i <= value; i++) {
        result *= i;
    } 
        return result;
    }
};
