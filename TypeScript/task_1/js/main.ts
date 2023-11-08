// interface named Teacher
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: string | boolean | number;
};

// Teacher object with the required properties
const teacher: Teacher = {
    firstName: 'Manuel',
    lastName: 'Vidarte',
    fullTimeEmployee: true,
    location: 'Lima',
};
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

// Add a custom property to the Teacher object
teacher.contract = true;

// Print the Teacher object
console.log(teacher);
console.log(teacher3);