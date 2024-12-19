const { faker } = require("@faker-js/faker");
const db = require("./db");

// Количество записей для каждой сущности
const NUM_RECORDS = 1000000;
const BATCH_SIZE = 10000;

// Функция для генерации тестовых данных для пользователей (User)

async function createUsers() {
  for (let i = 0; i < NUM_RECORDS; i += BATCH_SIZE) {
    const users = [];
    for (let j = 0; j < BATCH_SIZE; j++) {
      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement([
          "participant",
          "organizer",
          "expert",
          "admin",
        ]),
        affiliation: faker.company.name(),
      });
    }
    await db.User.bulkCreate(users);
    console.log(`${i + BATCH_SIZE} Users created`);
  }
}

// Функция для генерации тестовых данных для конференций (Conference)
async function createConferences() {
  for (let i = 0; i < NUM_RECORDS; i += BATCH_SIZE) {
    const conferences = [];
    for (let j = 0; j < BATCH_SIZE; j++) {
      conferences.push({
        title: faker.company.catchPhrase(),
        description: faker.lorem.paragraphs(),
        startDate: faker.date.future(),
        endDate: faker.date.future(),
        location: faker.location.city(),
      });
    }
    await db.Conference.bulkCreate(conferences);
    console.log(`${i + BATCH_SIZE} Conferences created`);
  }
}

// Функция для генерации тестовых данных для заявок (Submission)
async function createSubmissions() {
  for (let i = 0; i < NUM_RECORDS; i += BATCH_SIZE) {
    const submissions = [];
    for (let j = 0; j < BATCH_SIZE; j++) {
      submissions.push({
        title: faker.lorem.sentence(),
        abstract: faker.lorem.paragraphs(),
        status: faker.helpers.arrayElement([
          "submitted",
          "reviewed",
          "accepted",
          "rejected",
        ]),
        userId: faker.number.int({
          min: 1,
          max: NUM_RECORDS,
        }),
        conferenceId: faker.number.int({
          min: 1,
          max: NUM_RECORDS,
        }),
      });
    }

    await db.Submission.bulkCreate(submissions);
    console.log(`${i + BATCH_SIZE} Submissions created`);
  }
}

// Основная функция для генерации и записи данных в БД
async function seedDatabase() {
  await db.sequelize.sync({ force: true });
  console.log("Database create");

  // Пересоздание таблиц
  await createUsers();
  await createConferences();
  await createSubmissions();
  console.log("Database filled");
  process.exit();
}

seedDatabase().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
