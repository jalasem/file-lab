module.exports = (input) => {
  const inputs = input.split("\n");
  const firstLine = inputs[0].trim();
  const constants = {
    numOfStudents: firstLine.split(" ")[0],
    attempts: firstLine.split(" ")[1],
  };
  const contests = [];

  for (let i = 1; i < constants.numOfStudents; i++) {
    const currentData = inputs[i].split(" ");

    contests.push({
      name: currentData[0],
      attempts: currentData.slice(1),
    });
  }

  return {
    contests,
  };
};
