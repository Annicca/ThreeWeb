const mongoDB = require("./db/mongodb");
const { User, Conference, Submission } = require("./models/mongoModels");
const { faker } = require("@faker-js/faker");

// Количество записей для каждой сущности и размер порции
const NUM_RECORDS = 1000000;
const BATCH_SIZE = 10000;

async function dropCollections() {
  try {
    await User.collection.drop();
    await Conference.collection.drop();
    await Submission.collection.drop();
  } catch (error) {
    throw error;
  }
}

async function generateData() {
  await mongoDB();

  await dropCollections();

  for (let i = 0; i < NUM_RECORDS; i += BATCH_SIZE) {
    const users = [];
    const conferences = [];
    const submissions = [];

    for (let j = 0; j < BATCH_SIZE; j++) {
      const user = new User({
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
      users.push(user);

      const conference = new Conference({
        title: faker.company.catchPhrase(),
        description: faker.lorem.paragraphs(),
        startDate: faker.date.future(),
        endDate: faker.date.future(),
        location: faker.location.city(),
      });
      conferences.push(conference);

      const submission = new Submission({
        title: faker.commerce.productName(),
        abstract: faker.lorem.paragraphs(),
        fileUrl: faker.internet.url(),
        status: faker.helpers.arrayElement([
          "submitted",
          "reviewed",
          "accepted",
          "rejected",
        ]),
        userId: user._id,
        conferenceId: conference._id,
      });
      submissions.push(submission);
    }

    await User.insertMany(users);
    console.log(`${i + BATCH_SIZE} Users created`);

    await Conference.insertMany(conferences);
    console.log(`${i + BATCH_SIZE} Conferences created`);

    await Submission.insertMany(submissions);
    console.log(`${i + BATCH_SIZE} Submissions created`);
  }

  process.exit();
}

generateData().catch((error) => {
  console.error("Error generating data:", error);
  process.exit(1);
});
