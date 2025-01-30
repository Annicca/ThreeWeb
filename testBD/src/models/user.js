module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false },
      affiliation: { type: DataTypes.STRING, allowNull: true },
    },
    { indexes: [{ fields: ["role"] }] }
  );
  return User;
};
