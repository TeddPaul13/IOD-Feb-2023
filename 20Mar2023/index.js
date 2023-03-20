const studentDetails = []
const student1 = {
    Name: "Teddy",
    Age: 20,
    Subjects: ["JavaScript", "React","MongoDB"]
}
const student2 = {
    Name: "Paul",
    Age: 21,
    Subjects: ["Python", "ReactNative","MySQL"]
}
studentDetails.push(student1);
studentDetails.push(student2);


for (let index=0; index<studentDetails.length; index++){

const student = studentDetails[index]
const studentName = student.Name;
const studentAge = student.Age;
const studentSubject = student.Subjects;

console.log(studentName);
console.log(studentAge);

for (let i=0; i<studentSubject.length; i++){
    const studentList = studentSubject[i]
    console.log(studentList);
}

}

