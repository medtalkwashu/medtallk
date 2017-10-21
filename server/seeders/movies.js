'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', movieData);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

var movieData = [
  {
    title: "Hernia",
    physician: "Dr. Michael Awad",
    institution: "WUSM",
    indication: "Hernia",
    url: "https://www.youtube.com/watch?v=CRryNzXBrVQ"
  }
]
