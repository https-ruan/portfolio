export const age = (birthdate: string): number => {
  const currentYear = new Date().getFullYear();
  const birthdateYear = new Date(birthdate).getFullYear();

  return currentYear - birthdateYear;
};
