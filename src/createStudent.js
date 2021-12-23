const createStudent = (name) => {
  const obj = {
    name,
    feedback: () => 'Eita pessoa boa!',
  };
  return obj;
};

module.exports = createStudent;
