const fs = require("fs");
const parse = require("./parser");

const sum = (...nums) => nums.reduce((sum, num) => sum + parseInt(num), 0);

try {
  const input = fs.readFileSync("input.in", "utf-8").trim();
  let { contests } = parse(input);

  const best = contests.sort((a, b) => {
    return sum(...b.attempts) - sum(...a.attempts);
  })[0];

  console.log(JSON.stringify({ best }, null, 2));

  fs.writeFileSync(
    "result.output",
    [`${best.name} ${sum(...best.attempts)}`, best.attempts.join(" ")].join(
      "\n"
    ),
    {
      encoding: "utf-8",
    }
  );
} catch (err) {
  console.error(err.message);
}
