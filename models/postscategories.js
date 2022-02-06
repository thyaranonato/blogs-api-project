const PostsCategories = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {},
  { timestamps: false });

  postsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories', // alias da associação
      through: 'PostsCategories', // tabela de associação.
      foreignKey: 'postId', // model que belongsToMany
      otherKey: 'categoryId' }); // ref ao model com o qual estou criando uma associação

    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: 'PostsCategories',
      foreignKey: 'categoryId',
      otherKey: 'postId' });
    };
    return postsCategories;
  };

module.exports = PostsCategories;
