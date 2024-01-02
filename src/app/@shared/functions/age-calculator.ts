const isLeapYear = (year: number) => {
  let date = new Date(`02-28-${year}`);
  date.setDate(date.getDate() + 1);
  return date.getMonth() + 1 === 2;
};

export const getAge = (date: string) => {
  const birthdate = new Date(`${date}T00:00:00`);
  const now = new Date();
  let years = now.getFullYear() - birthdate.getFullYear();

  birthdate.setFullYear(birthdate.getFullYear() + years);

  if (birthdate > now) {
    years--;
    birthdate.setFullYear(birthdate.getFullYear() - 1);
  }

  const days = (now.getTime() - birthdate.getTime()) / (3600 * 24 * 1000); //86.400.000

  return Math.floor(years + days / (isLeapYear(now.getFullYear()) ? 366 : 365));
};
