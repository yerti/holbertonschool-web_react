namespace Subjects {
  export class React extends Subject {
    experienceTeachingReact?: number;

    getRequirements(): string {
      return super.getRequirements() + "\nJavaScript library: React";
    }
  }
}
