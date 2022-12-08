'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Horror Movie',
        description: 'Wow so scary',
        image: 'https://www.picture.com/232323542',
        releaseYear: '1985',
        genre_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Comedy Movie',
        description: 'Wow so funny',
        image: 'https://www.picture.com/2325235423542',
        releaseYear: '1995',
        genre_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Romance Movie',
        description: 'Wow so sexy',
        image: 'https://www.picture.com/2323564567323542',
        releaseYear: '1976',
        genre_id: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Drama Movie',
        description: 'Wow so drama',
        image: 'https://www.picture.com/232346357323542',
        releaseYear: '1875',
        genre_id: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Action Movie',
        description: 'Wow so actiony',
        image: 'https://www.picture.com/232353748674523542',
        releaseYear: '1975',
        genre_id: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
