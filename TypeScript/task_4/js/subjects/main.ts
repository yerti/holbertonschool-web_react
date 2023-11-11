export const cpp = "C++";
export const java = "Java";
export const react = "React";

export const cTeacher = {
  experienceTeachingC: 10,
};

export function getRequirements(subject: string) {
  return `Requirements for ${subject}`;
}

export function getAvailableTeacher(teacher: any) {
  return `Teacher available: Experience in C ${teacher.experienceTeachingC} years`;
}
