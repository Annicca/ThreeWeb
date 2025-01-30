module.exports = (sequelize, DataTypes) => {
  const Conference = sequelize.define(
    "conference",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false },
      location: { type: DataTypes.STRING, allowNull: false },
    },
    { indexes: [{ fields: ["location"] }] }
  );
  return Conference;
};
