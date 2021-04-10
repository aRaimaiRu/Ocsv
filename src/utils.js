const randomInt = () => {
  return Math.round(Math.random() * 100000);
};

const createListRange = (n) => {
  return [...Array(n).keys()];
};

export { randomInt, createListRange };
