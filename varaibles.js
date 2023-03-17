let num_1 = 10;
let num_2 = 5;

// Addition

console.log("num_1 + num_2", num_1 + num_2);

// Subtraction
console.log("num_1 - num_2", num_1 - num_2);

// Multiplication
console.log("num_1 * num_2", num_1 * num_2);

// Division
console.log("num_1 / num_2", num_1 / num_2);

// Remainder
console.log("num_1 % num_2", num_1 % num_2);


// Increment
console.log('++num_1 = ', ++num_1); // num_1 is now 11
console.log('num_1++ = ', num_1++); // prints 11 and then increased to 12
console.log('num_1 = ', num_1);     // 12

// decrement
console.log('--num_2 = ', --num_2); // num_1 is now 11
console.log('num_1-- = ', num_1--); // prints 11 and then decreased to 10
console.log('num_1 = ', num_1);     // 11

//exponentiation
console.log('num_1 * num_2=', num_1 * num_2);


// Without varaibles
document.querySelector("#btn").onclick = () =>{
    alert(`Hello ${prompt("What is your name?")}, nice to see you!`);
    document.querySelector("#heading").textContent = `Welcome ${prompt("What is your name?")}`
}

// With variables.
const BTN =document.querySelector("#btn");
const HEADING =document.querySelector("#heading");

BTN.onclick = () =>{
    const USER_NAME = prompt("What is your name?")
    alert(`Hello ${USER_NAME}, nice to see you`)
    HEADING.textContent = `Welcome ${USER_NAME}`;
}

let input_1 = prompt ("9");
let input_2 = prompt ("2");

parseFloat(input_1);
parseFloat(input_2);


// Addition

console.log("input_1 + input_2", input_1 + input_2);

// Subtraction

console.log("input_1 - input_2", input_1 - input_2);

// Division

console.log("input_1 / input_2", input_1 / input_2);

// Remainder

console.log("input_1 % input_2", input_1 % input_2);