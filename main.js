module.exports = {
  validation: (data) => {
    console.log(`input data : ${data}`);

    return data < 37.5 && data > 36;
  },
};
