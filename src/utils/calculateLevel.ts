const calculateLevel = (value: number): number => {
  if (value >= 15) {
    return 5;
  } else if (value >= 10) {
    return 4;
  } else if (value >= 5) {
    return 3;
  } else if (value >= 1) {
    return 2;
  } else {
    return 1;
  }
};

export default calculateLevel;
