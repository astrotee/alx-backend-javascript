const express = require('express');
const fs = require('fs');

const dbPath = process.argv.length === 3 ? process.argv[2] : null;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let message = '';
      const lines = data.split('\n').filter((line) => line !== '').slice(1);
      message += `Number of students: ${lines.length}`;
      const fields = {};
      for (const line of lines) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
      for (const field in fields) {
        if (field) {
          message += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }
      resolve(message);
    });
  });
}

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  res.write('This is the list of our students\n');
  countStudents(dbPath)
    .then((message) => {
      res.end(message);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(1245);

module.exports = app;
