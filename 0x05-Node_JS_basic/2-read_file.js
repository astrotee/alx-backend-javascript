const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' }).trim().split('\n');
    const numberOfStudents = data.length > 0 ? data.length - 1 : 0;
    console.log(`Number of students: ${numberOfStudents}`);
    const fields = {};
    for (let i = 1; i <= numberOfStudents; i += 1) {
      const student = data[i].split(',');
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    }
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
