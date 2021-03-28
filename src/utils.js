const randomInt = () => {
  console.log(Math.random() * 100000);
  return Math.round(Math.random() * 100000);
};

const createListRange = (n) => {
  return [...Array(n).keys()];
};

export { randomInt, createListRange };
