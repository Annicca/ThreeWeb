const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testpostgre", "root", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("../models/user")(sequelize, DataTypes);
db.Conference = require("../models/conference")(sequelize, DataTypes);
db.Submission = require("../models/submission")(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Submission, { foreignKey: "userId" });
db.Conference.hasMany(db.Submission, { foreignKey: "conferenceId" });
db.Submission.belongsTo(db.User, { foreignKey: "userId" });
db.Submission.belongsTo(db.Conference, { foreignKey: "conferenceId" });

module.exports = db;
