const { performance } = require("perf_hooks");
const db = require("../db");

async function measureQueryExecutionTime(query, description) {
  const startTime = performance.now();
  await query();
  const endTime = performance.now();
  console.log(`${description}: ${(endTime - startTime).toFixed(2)} ms`);
}

async function runBenchmarks() {
  // Пример простого запроса на выборку всех пользователей
  await measureQueryExecutionTime(() => db.User.findAll(), "Select all users");

  // Пример запроса с условием
  await measureQueryExecutionTime(
    () => db.Conference.findAll({ where: { location: "New York" } }),
    "Select conferences in New York"
  );

  // Пример запроса на обновление данных
  await measureQueryExecutionTime(
    () =>
      db.User.update(
        { role: "updated_role" },
        { where: { role: "participant" } }
      ),
    "Update user roles"
  );

  // Пример запроса на удаление данных
  await measureQueryExecutionTime(
    () => db.Submission.destroy({ where: { status: "rejected" } }),
    "Delete rejected submissions"
  );
}

runBenchmarks().catch((error) => {
  console.error("Error running benchmarks:", error);
  process.exit(1);
});
