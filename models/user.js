const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false }); // timestamps false, porque exclui os campos de criação e atualização quando criei migrations.
  return user;
};

module.exports = User;
