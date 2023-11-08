// interface named Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: string | boolean | number;
}

//  interface named Directors that extends Teacher
// part that asks me to add in task 2
interface Directors extends Teacher {
  numberOfReports: number;
}


// Examples
// Teacher object with the required properties
const teacher: Teacher = {
  firstName: "Manuel",
  lastName: "Vidarte",
  fullTimeEmployee: true,
  location: "Lima",
};
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Add a custom property to the Teacher object
teacher.contract = true;

// Print the Teacher object
console.log(teacher);
console.log(teacher3);
