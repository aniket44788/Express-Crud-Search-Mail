const { default: mongoose } = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(" database connected ");
}

module.exports = main;