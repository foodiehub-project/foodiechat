'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('User', 'profilePicture', { type: DataTypes.STRING });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('User', 'profilePicture', { /* query options */ });
  }
};
