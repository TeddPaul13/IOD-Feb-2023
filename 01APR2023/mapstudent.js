//Map Filter and Reduce exercise

const students = [
  { name: "Teddy", scores: [90, 85, 92] },
  { name: "Alberto", scores: [75, 80, 85] },
  { name: "Adam", scores: [90, 95, 85] },
  { name: "David", scores: [80, 100, 86] },
  { name: "Jessy", scores: [100, 96, 98] },
  { name: "Linda", scores: [87, 100, 98] },
];

// Use map to calculate the average test score for each student

students.forEach(student => {
   const studentScores = student.scores
   let sum = 0;
   studentScores.forEach(score =>{
    sum += score;
   })
  const average = sum/studentScores.length;
  student.average = average;
});

 



//avarage = total_score/student.scores.length

// Use filter to only select students with an average above 90
const topStudents = [];
students.forEach(student =>{
    console.log(student)
    if (student.average > 90){
        topStudents.push(student)
    }
});
console.log(topStudents)
