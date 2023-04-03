//Sum of the array

// {
  //Checking sum of the array is greater than value or not => use reduce function to get the sum of the array (Slide 41, Intermediate)
  //Get the sum of the array and compare the sum with the provide value
  //First Option : Using foreach
  //Second Option: Using reduce
  //Using Reduce method
  
//   const numArr = [1,2,3,4,5,100,200]
//   const checkTotalSumArrayLessThanValue = (arrayNumber, value) =>{
    
//     const initial = 0;
//     const arraySum = arrayNumber.reduce ((sum, current) => sum + current, initial)
//     console.log(arraySum)
//     return (arraySum < value) ? `less than ${value}` : `greater than ${value}`;
    
//   }
//  console.log(checkTotalSumArrayLessThanValue(numArr, 20))

  //Using forEach method


// //Sum of the array object

class Student {
  constructor(name, age, score, school) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.school = school;
  }
}

const studentArr = [
  new Student('Teddy', 20, 90, 'Sydney High school'),
  new Student('Luke', 23, 88, 'Sydney High school'),
  new Student('Rachel', 23, 95, 'Sydney High school'),
  new Student('Liz', 20, 92, 'Sydney High school'),
  new Student('Alberto', 24, 85, 'Sydney High school'),
]
const checkTotalSumScoreOfListStudentGradeLessThanValue = (studentArr, value) => {
//   //Checking sum of the array is greater than value or not => use reduce function to get the sum of the array (Slide 41)
const totalScore = studentArr.reduce ((sum, student) => sum + student.score, 0)
console.log(totalScore)

 return (totalScore < value) ? `less than ${value}` : `greater than ${value}`;
 };
 console.log(checkTotalSumScoreOfListStudentGradeLessThanValue(studentArr, 500))