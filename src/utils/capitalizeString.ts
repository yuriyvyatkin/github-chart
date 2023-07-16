const capitalizeString = (string: string): string => {
  const capitalizedString =
    string.charAt(0).toLocaleUpperCase() + string.slice(1);
  return capitalizedString;
};

export default capitalizeString;
