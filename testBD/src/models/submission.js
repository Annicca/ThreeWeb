module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define(
    "submission",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      abstract: { type: DataTypes.TEXT, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      conferenceId: { type: DataTypes.INTEGER, allowNull: false },
    },
    { indexes: [{ fields: ["status"] }] }
  );
  return Submission;
};
