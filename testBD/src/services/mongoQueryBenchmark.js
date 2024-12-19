const { performance } = require("perf_hooks");
const mongoDB = require("../db/mongodb");
const { User, Conference, Submission } = require("../models/mongoModels");

async function measureQueryExecutionTime(query, description) {
  const startTime = performance.now();
  await query();
  const endTime = performance.now();
  console.log(`${description}: ${(endTime - startTime).toFixed(2)} ms`);
}

async function runBenchmarks() {
  await mongoDB();

  // Пример простого запроса на выборку всех пользователей
  await measureQueryExecutionTime(
    () => User.find({}).exec(),
    "Select all users"
  );

  // Пример запроса с условием
  await measureQueryExecutionTime(
    () => Conference.find({ location: "New York" }).exec(),
    "Select conferences in New York"
  );

  // Пример запроса на обновление данных
  await measureQueryExecutionTime(
    () =>
      User.updateMany(
        { role: "participant" },
        { $set: { role: "updated_role" } }
      ).exec(),
    "Update user roles"
  );

  // Пример запроса на удаление данных
  await measureQueryExecutionTime(
    () => Submission.deleteMany({ status: "rejected" }).exec(),
    "Delete rejected submissions"
  );

  process.exit();
}

runBenchmarks().catch((error) => {
  console.error("Error running benchmarks:", error);
  process.exit(1);
});
