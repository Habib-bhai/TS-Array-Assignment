"use strict";
// QUESTION 1
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".
// SOLUTION:
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["apple", "banana", "mango", "orange"];
// console.log(fruits);
// QUESTION 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.
// SOLUTION:
let numbers = [10, 20, 30, 40]; //array with number type 
// console.log(numbers);
// QUESTION 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
// SOLUTION:
let thirdFruit = fruits[2]; //accessed the third element of array named fruits
// console.log(thirdFruit);
// QUESTION 4
// Change the second element of the numbers array to 25.
// SOLUTION:
numbers[1] = 25; //changed the second element of array "numbers" by accessing its index and assigning it the desired/required number
// console.log(numbers[1]);
// QUESTION 5
// Add the element "grape" to the end of the fruits array using the
// method.
// SOLUTION:
fruits.push("grape"); //added "grape" at the end of the array using push method, Now, the array is:  ["apple","banana","mango","orange","grape"]
// console.log(fruits);
// QUESTION 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
// SOLUTION:
let lastFruit = fruits.pop(); // Removed the last element from array using POP() method new array is:  ["apple","banana","mango","orange"]
// console.log(lastFruit);
// console.log(fruits);
// QUESTION 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
// SOLUTION:
let firstFruit = fruits.shift(); // Removed the first element of array using "shift()" method, new array is:  ["banana","mango","orange"]
// console.log(firstFruit);
// console.log(fruits);
// QUESTION 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.
// SOLUTION:
fruits.unshift("kiwi"); // added "kiwi" using "unshift()" method, new array is: ["kiwi","banana","mango","orange"]
// console.log(fruits);
// QUESTION 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.
//  SOLUTION:
fruits.splice(1, 2); // Removed 2 elements from "fruits" starting from index1 (second element), so, the new array is: [ 'kiwi', 'orange' ]
// console.log(fruits);
// QUESTION 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
// SOLUTION:
fruits.splice(2, 0, "pineapple", "pear"); //added new elements at index2. New array is:[ 'kiwi', 'orange', 'pineapple', 'pear' ]
// console.log(fruits);
// QUESTION 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
// SOLUTION:
let citrusFruits = fruits.slice(0, 2);
// console.log(citrusFruits);
// QUESTION 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
// SOLUTION:
let lastTwoFruits = fruits.slice(-2);
// console.log(lastTwoFruits);
// NOTE: The basic difference between "splice" & "slice" is: "slice" doesn't alter the original array but "splice" does change the original array. THEIR FUNCTIONALITIES ARE CLEARLY EVIDENT FROM THE CODE ABOVE
