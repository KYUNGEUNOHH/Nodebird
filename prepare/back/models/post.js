module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "User",
    {
      content: {},
    },
    {
      charset: "utfmb4",
      collate: "utfmb4_general_ci", //임티 저장
    }
  );
  Post.associate = (db) => {};
  return Post;
};
