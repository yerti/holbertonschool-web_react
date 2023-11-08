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

// part of question 3 Printing teachers
// interface for the function named printTeacherFunction
interface printTeacherFunction {
    (firstName: string, lastName:string): string;
};

// Write a function printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    // we get the first letter of the name in capital letters
    const firstInitial = firstName.charAt(0).toUpperCase();

    // we combine the first letter of the first name with the last name
    const fullName = `${firstInitial}. ${lastName}`; // "J. Doe"

    return fullName
};

// part of question 4 where we create a class
// interface for StudentClass constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
};

// interface for class StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
};

// we implement the StudentClass class
class StudentClassImpl implements StudentClass {
    private firstName: string;
    private lastName: string;
    
    constructor(firstName: string , lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    workOnHomework(): string {
        return "Currently working";
    };

    displayName(): string {
        return this.firstName;
    };
};
