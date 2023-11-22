'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGroup.belongsTo(models.User);
      UserGroup.belongsTo(models.Group);
    }
  }
  UserGroup.init({
    role: {
      type: DataTypes.STRING,
      defaultValue: "member"
    },
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "GroupId must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "GroupId must not be empty"
        },
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "UserId must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "UserId must not be empty"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'UserGroup',
  });
  return UserGroup;
};