interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let s1: Student = {firstName: 'ES', lastName: 'One', age: 1, location: 'School1'};
let s2: Student = {firstName: 'ES', lastName: 'Two', age: 2, location: 'School2'};

let studentsList: Student[] = [s1, s2];

 const table = document.createElement('table');
 const thead = document.createElement('thead');
 const tbody = document.createElement('tbody');

// Create header row
const headerRow = document.createElement('tr');
['first name', 'location'].forEach(cell => {
  const th = document.createElement('th');
  th.textContent = cell;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);


// Add table to DOM
document.body.appendChild(table);
for (const {firstName, location} of studentsList) {
  const tr = document.createElement('tr');
  [firstName, location].forEach(cell => {
    const td = document.createElement('td');
    td.textContent = cell;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
  console.log(`${firstName}\t${location}`);
}

table.appendChild(thead);
table.appendChild(tbody);
