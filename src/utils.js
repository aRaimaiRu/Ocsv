const randomInt = () => {
  console.log(Math.random() * 100000);
  return Math.round(Math.random() * 100000);
};

export { randomInt };
