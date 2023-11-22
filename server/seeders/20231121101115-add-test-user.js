'use strict';
const { User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.create({
      email: "test.email@testmail.com",
      password: "TestAdmin",
      fullName: "Test Admin"
    });
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({
      where: {
        email: "test.email@testmail.com"
      },
    });
  }
};
