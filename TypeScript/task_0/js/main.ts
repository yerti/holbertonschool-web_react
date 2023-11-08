// Write an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

// Create two student objects
const student1: Student = {
  firstName: 'Rosa',
  lastName: 'Rodrigues',
  age: 24,
  location: 'Lima',
};
const student2: Student = {
  firstName: 'Javier',
  lastName: 'Mendoza',
  age: 22,
  location: 'Trujillo'
};

// arrangement for storing students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const table = document.createElement('table');
  document.body.appendChild(table);

  const header = table.createTHead();
  const rowHeader = header.insertRow();
  const headerName =  rowHeader.insertCell(0);
  const headerLocation = rowHeader.insertCell(1);
  headerName.innerHTML = '<b>Name</b>';
  headerLocation.innerHTML = '<b>Location</b>';

  const bodyTable = document.createElement('tbody');
  table.appendChild(bodyTable);

  studentsList.forEach((student) => {
    const row = bodyTable.insertRow();
    const cellName =  row.insertCell(0);
    const cellLocation = row.insertCell(1);
    cellName.innerHTML = student.firstName;
    cellLocation.innerHTML = student.location;
  });
};

// Render the table when the page loads
window.onload = renderTable;