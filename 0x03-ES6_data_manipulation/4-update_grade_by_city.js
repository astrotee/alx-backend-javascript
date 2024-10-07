export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => (student.location === city)).map((student) => {
    const newStudent = student;
    newStudent.grade = 'N/A';
    for (const studentGrade of newGrades) {
      if (studentGrade.studentId === student.id) {
        newStudent.grade = studentGrade.grade;
        break;
      }
    }
    return newStudent;
  });
}
