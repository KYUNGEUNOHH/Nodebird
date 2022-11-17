module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Comment",
    {
      email: {},
      nickname: {},
      password: {},
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글 저장
    }
  );
  Comment.associate = (db) => {};
  return User;
};
