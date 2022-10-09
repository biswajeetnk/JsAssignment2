//Write a program that creates the "Student" object and print om console 

let Student =
{
    name: 'Biswajeet',
    collegeName: 'iNeuron',
    location: 'Bangalore',
    pincode: 562129,
    teacherDetails :
    {
        teacherName: 'Mukesh Otwani',
        teacherPhone: 9898989898,
        teacherSubjects: ['JavaScript', 'Java', 'Python']
    } 
}

console.log("Student name : "+Student.name)
console.log("Teacher name : "+Student.teacherDetails.teacherName)