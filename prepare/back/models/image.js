module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      scr: {},
    },
    {
      charset: "utf8",
      collate: "utfmb4_general_ci", //임티 저장
    }
  );
  Image.associate = (db) => {};
  return Image;
};
