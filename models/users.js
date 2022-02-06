const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false }); // timestamps false, porque exclui os campos de criação e atualização quando criei migrations.

  // foreignKey que representa o user na tabela posts vai ser userId
  users.associate = (models) => {
    users.hasMany(models.BlogPosts, { foreignKey: 'userId', as: 'posts' });
  };

  return users;
};

module.exports = Users;
