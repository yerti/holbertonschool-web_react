namespace Subjects {
    export class Cpp extends Subject {
        experienceTeachingC?: number;

        getRequirements(): string {
            return super.getRequirements() + '\nProgramming language: C++';
        }
    }
}