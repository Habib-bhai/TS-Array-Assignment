"use strict";
// Part 3: Array with Types and Indexing - Employee Salaries
Object.defineProperty(exports, "__esModule", { value: true });
let employeeDetails = [{
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
];
const calculateSalary = (obj) => {
    let bonus = 0.1; //for 10%
    let salary = obj.hourlyRateInDollar * obj.hoursWorkedPerWeek;
    if (obj.hoursWorkedPerWeek >= 20) {
        salary += salary * bonus;
        console.log("\nCongratulations! You've worked more than 20HOURS So, You deserve a bonus");
        console.log(`Salary after adding BONUS, Your Salary: ${salary}$`);
        console.log(`\n\t\tYou worked for: ${obj.hoursWorkedPerWeek} HRS this week`);
    }
    else {
        console.log("\nSorry! You've worked less than 20HOURS This week. So, You won't get a bonus");
        console.log(`Your Salary for this week: ${salary}$`);
        console.log(`\n\t\tYou worked for: ${obj.hoursWorkedPerWeek} HRS this week`);
    }
};
employeeDetails.forEach((eachObj) => {
    calculateSalary(eachObj);
});
