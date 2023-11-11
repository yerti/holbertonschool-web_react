// definicion de interfaces
interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const sumCredits = subject1.credits + subject2.credits;
  const combineBrand = `${subject1.brand} + ${subject2.brand}`;

  return { credits: sumCredits, brand: combineBrand };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  const sumCreditss = subject1.credits + subject2.credits;
  const combineBrand = `${subject1.brand} + ${subject2.brand}`;

  return { credits: sumCreditss, brand: combineBrand };
}

// examples to major credits:
const mathMajor: MajorCredits = { credits: 12, brand: "Math" };
const physicsMajor: MajorCredits = { credits: 15, brand: "Physics" };

console.log(sumMajorCredits(mathMajor, physicsMajor));

// examples to minor credits

const historyMinor: MinorCredits = {credits: 20, brand: "History"};
const artMinor: MinorCredits = {credits: 16, brand: "Art"};

console.log(sumMinorCredits(historyMinor, artMinor));

