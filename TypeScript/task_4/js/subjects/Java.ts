namespace Subjects {
  export class Java extends Subject {
    experienceTeachingJava?: number;

    getRequirements(): string {
      return super.getRequirements() + '\nProgramming llanguage: Java';
    }
  }
}
