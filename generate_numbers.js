const generateNumbers = (start = 1, end = 100) => {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
};

module.exports = generateNumbers;