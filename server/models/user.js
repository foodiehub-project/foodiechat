'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.UserGroup);
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "User Email has already been used"
      },
      validate: {
        notNull: {
          args: true,
          msg: "User Email must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "User Email must not be empty"
        },
        isEmail: {
          args: true,
          msg: "User Email format invalid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "User Password must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "User Password must not be empty"
        }
      }
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "User Full Name must not be empty"
        },
        notEmpty: {
          args: true,
          msg: "User Full Name must not be empty"
        }
      }
    },
    wallpaper: {
      type: DataTypes.STRING,
      defaultValue: 'https://images.unsplash.com/photo-1696673021120-08501c90bf54?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      validate: {
        isUrl: {
          args: true,
          msg: "Image Wallpaper must be Url"
        }
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      defaultValue: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=1060',
      validate: {
        isUrl: {
          args: true,
          msg: "Profile Picture must be Url"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};