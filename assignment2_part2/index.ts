// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades

// At First, lets create our type Alias named "Student" which will help us in giving type to the objects inside the array
type Student = {
    name: string,
    grades: number[]
}

// Array of objects which is storing name and Grades of three different students.
let studentNamesAndGrades: Student[] = [{
    name: "Anees Bro",
    grades: [90, 80, 70]
}, {
    name: "Habib Bro",
    grades: [100, 90, 80]
}, {
    name: "Ali Bro",
    grades: [95, 85, 75]
} ]


// Now we will create a function which will take an array of objects as an argument and will return the average of all the grades of Student one At a time Because foreach loop is passing one object at a time which contians information regarding one student only.
const calculateAverageGrades= (Grades: number[])=> {
let average = 0

Grades.forEach( (Element: number)=> {
    average+= Element
} )

 return average/Grades.length
}

// As we know that we've declared an array of object and we have to iterate or traverse through each object, to do this automatically the best approach is that we apply a loop which should call the function and pass one object at a time & for this scenario "foreach" loop is ideal.
studentNamesAndGrades.forEach( obj => {
    console.log(`Average Grade for Student ${obj.name} is: ${calculateAverageGrades(obj.grades)}`)
})