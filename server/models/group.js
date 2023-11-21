'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.hasMany(models.UserGroup);
    }
  }
  Group.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Group Name must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "Group Name must not be empty"
        },
      }
    },
    groupPicture: {
      type: DataTypes.STRING,
      defaultValue: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      validate: {
        isUrl: {
          args: true,
          msg: "Group Picture must be Url"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};