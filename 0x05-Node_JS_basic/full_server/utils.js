import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line !== '');
      const fieldStudents = {};
      for (const line of lines.slice(1)) {
        const student = line.split(',');
        if (!fieldStudents[student[3]]) {
          fieldStudents[student[3]] = [];
        }
        fieldStudents[student[3]].push(student[0]);
      }

      resolve(fieldStudents);
    });
  });
}

export default readDatabase;
