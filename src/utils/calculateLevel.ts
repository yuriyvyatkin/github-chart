const calculateLevel = (value: number): number => {
  if (value >= 30) {
    return 5;
  } else if (value >= 20) {
    return 4;
  } else if (value >= 10) {
    return 3;
  } else {
    return 2;
  }
};

export default calculateLevel;
