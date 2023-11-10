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
  (firstName: string, lastName: string): string;
}

// Write a function printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // we get the first letter of the name in capital letters
  const firstInitial = firstName.charAt(0).toUpperCase();

  // we combine the first letter of the first name with the last name
  const fullName = `${firstInitial}. ${lastName}`; // "J. Doe"

  return fullName;
};

// part of question 4 where we create a class
// interface for StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// interface for class StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// we implement the StudentClass class
class StudentClassImpl implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// part of question 5
// DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

//TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class that implements DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class that implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  const salaryNum = typeof salary !== "number" ? parseInt(salary) : salary;

  if (salaryNum <= 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// part of question 6
// function isDirector
function isDirector(employee: Director | Teacher): boolean {
  return employee.workFromHome() === "Working from home";
}

// function executeWork
function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    console.log((employee as Director).workDirectorTasks());
  } else {
    console.log((employee as Teacher).workTeacherTasks());
  }
}

// part of question 7

type Subjects = "Math" | "History"; // literal type named Subjects

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}
