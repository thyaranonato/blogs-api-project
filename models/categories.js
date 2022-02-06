const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, { timestamps: false }); // timestamps false, porque exclui os campos de criação e atualização quando criei migrations.
  return categories;
};

module.exports = Categories;
