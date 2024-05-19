// Part 3: Array with Types and Indexing - Employee Salaries

type Employee = {
    name: string,
    hoursWorkedPerWeek: number,
    hourlyRateInDollar: number,
    baseSalaryInDollar: number //This salary will be for working 6 atleast hours A week
}


let employeeDetails: Employee[] = [{
    name: "Johny bhai lever",
    hoursWorkedPerWeek: 40,
    hourlyRateInDollar: 20,
    baseSalaryInDollar: 720 // For  Working 6 Hours a week
},

{
    name: "JOHNY Gargano",
    hoursWorkedPerWeek: 48,
    hourlyRateInDollar: 25,
    baseSalaryInDollar: 900 // For  Working 6 Hours a  week
},
{
    name: "Johny Maxwell",
    hoursWorkedPerWeek: 19,
    hourlyRateInDollar: 30,
    baseSalaryInDollar: 1080 // For  Working 6 Hours a  week
}

]

// The function is getting a object as argument which has type "Employee" which have defined as a type Alias,

const calculateSalary=(obj:Employee)=> {
    // Creating a variable which will hold the value of 10% as a floating point value(which of course is a number), It will will help us because then we just have to multiply the percentage number we've stored inside the variable with the salary to know how much will be the the 10% value of the salary, so, we can add that with salary as bonus
    let bonusPercentage = 0.1 //for 10%

    let salary = obj.hourlyRateInDollar * obj.hoursWorkedPerWeek

    // So, from here our logic starts: we will compare the number of hours worked, if it is equal or greater than 20 than we will add 10% bonus and will, first print on console that the employee is worked more than 20 hours, so, we are giving him/her bonus.
    if(obj.hoursWorkedPerWeek >= 20) {
        salary += salary * bonusPercentage 
        console.log("\nCongratulations! You've worked more than 20HOURS So, You deserve a bonus");
        
        console.log(`Salary after adding BONUS, Your Salary: ${salary}$`);
        console.log(`\n\t\tYou worked for: ${obj.hoursWorkedPerWeek} HRS this week`);
        
    }
    else {
        console.log("\nSorry! You've worked less than 20HOURS This week. So, You won't get a bonus");
        console.log(`Your Salary for this week: ${salary}$`);
        console.log(`\n\t\tYou worked for: ${obj.hoursWorkedPerWeek} HRS this week`);
        
    }
}

// Since we have three objects inside the array, So, here we are dynamically passing them as argument in function using forEach method.
employeeDetails.forEach((eachObj:Employee)=> {

    calculateSalary(eachObj)

})