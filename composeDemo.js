import {compose} from 'redux'

function removeSpace(string){
    return string.split(" ").join("");
        
}

// console.log(removeSpace("abc def ghi"));

function repeatString(string){
    return string+string; //OR
    // return string.repeat(2)
}

function convertToUpper(string){
    return string.toUpperCase()
}
const input = "adc def ghi jkl "


// const output = convertToUpper(repeatString(removeSpace(input)));
// console.log(output);


const composeFunction = compose(removeSpace,repeatString,convertToUpper);
console.log(composeFunction(input));

