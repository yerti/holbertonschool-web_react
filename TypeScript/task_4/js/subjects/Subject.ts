namespace Subjects {
    export class Subject {
        private teacher?: Teacher;

        constructor() {}
        setTeacher(teacher: Teacher) {
            this.teacher ? teacher;
        }

        getRequirements(): string {
            return 'Here is the list of requirements for this subject.';
        }
        getAvailableTeacher(): string {
            if (!this.teacher) {
                return 'No available teacher';
            }

            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}