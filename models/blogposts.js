const BlogPosts = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: true, createdAt: 'published', updatedAt: 'updated' });
  
  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.Users, { foreignKey: 'id', as: 'user' });
  };
  return blogPosts;
};

module.exports = BlogPosts;
