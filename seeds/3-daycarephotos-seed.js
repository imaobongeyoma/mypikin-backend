/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("daycarephotos").del();
  await knex("daycarephotos").insert([
    {
      id: 1,
      daycare_id: 1,
      daycarephoto: "/image1.jpg",
    },
    {
      id: 2,
      daycare_id: 1,
      daycarephoto: "/image2.jpg",
    },
    {
      id: 3,
      daycare_id: 1,
      daycarephoto: "/image3.jpg",
    },
    {
      id: 4,
      daycare_id: 2,
      daycarephoto: "/image4.jpg",
    },
    {
      id: 5,
      daycare_id: 2,
      daycarephoto: "/image5.jpg",
    },
    {
      id: 6,
      daycare_id: 2,
      daycarephoto: "/image6.jpg",
    },
    {
      id: 7,
      daycare_id: 3,
      daycarephoto: "/image7.jpg",
    },
    {
      id: 8,
      daycare_id: 3,
      daycarephoto: "/image8.jpg",
    },
    {
      id: 9,
      daycare_id: 3,
      daycarephoto: "/image9.jpg",
    },
    {
      id: 10,
      daycare_id: 4,
      daycarephoto: "/image10.jpg",
    },
    {
      id: 11,
      daycare_id: 4,
      daycarephoto: "/image11.jpg",
    },
    {
      id: 12,
      daycare_id: 4,
      daycarephoto: "/image12.jpg",
    },
    {
      id: 13,
      daycare_id: 5,
      daycarephoto: "/image13.jpg",
    },
    {
      id: 14,
      daycare_id: 5,
      daycarephoto: "/image14.jpg",
    },
    {
      id: 15,
      daycare_id: 5,
      daycarephoto: "/image15.jpg",
    },
    {
      id: 16,
      daycare_id: 6,
      daycarephoto: "/image16.jpg",
    },
    {
      id: 17,
      daycare_id: 6,
      daycarephoto: "/image17.jpg",
    },
    {
      id: 18,
      daycare_id: 6,
      daycarephoto: "/image18.jpg",
    },
    {
      id: 19,
      daycare_id: 7,
      daycarephoto: "/image19.jpg",
    },
    {
      id: 20,
      daycare_id: 7,
      daycarephoto: "/image20.jpg",
    },
    {
      id: 21,
      daycare_id: 7,
      daycarephoto: "/image21.jpg",
    },
    {
      id: 22,
      daycare_id: 8,
      daycarephoto: "/image22.jpg",
    },
    {
      id: 23,
      daycare_id: 8,
      daycarephoto: "/image23.jpg",
    },
    {
      id: 24,
      daycare_id: 8,
      daycarephoto: "/image24.jpg",
    },
    {
      id: 25,
      daycare_id: 9,
      daycarephoto: "/image25.jpg",
    },
    {
      id: 26,
      daycare_id: 9,
      daycarephoto: "/image26.jpg",
    },
    {
      id: 27,
      daycare_id: 9,
      daycarephoto: "/image27.jpg",
    },
    {
      id: 28,
      daycare_id: 10,
      daycarephoto: "/image28.jpg",
    },
    {
      id: 29,
      daycare_id: 10,
      daycarephoto: "/image29.jpg",
    },
    {
      id: 30,
      daycare_id: 10,
      daycarephoto: "/image30.jpg",
    },
    {
      id: 31,
      daycare_id: 11,
      daycarephoto: "/image31.jpg",
    },
    {
      id: 32,
      daycare_id: 11,
      daycarephoto: "/image32.jpg",
    },
    {
      id: 33,
      daycare_id: 11,
      daycarephoto: "/image33.jpg",
    },
    {
      id: 34,
      daycare_id: 12,
      daycarephoto: "/image34.jpg",
    },
    {
      id: 35,
      daycare_id: 12,
      daycarephoto: "/image35.jpg",
    },
    {
      id: 36,
      daycare_id: 12,
      daycarephoto: "/image36.jpg",
    },
    {
      id: 37,
      daycare_id: 13,
      daycarephoto: "/image37.jpg",
    },
    {
      id: 38,
      daycare_id: 13,
      daycarephoto: "/image38.jpg",
    },
    {
      id: 39,
      daycare_id: 13,
      daycarephoto: "/image39.jpg",
    },
    {
      id: 40,
      daycare_id: 14,
      daycarephoto: "/image40.jpg",
    },
    {
      id: 41,
      daycare_id: 14,
      daycarephoto: "/image41.jpg",
    },
    {
      id: 42,
      daycare_id: 14,
      daycarephoto: "/image42.jpg",
    },
    {
      id: 43,
      daycare_id: 15,
      daycarephoto: "/image43.jpg",
    },
    {
      id: 44,
      daycare_id: 15,
      daycarephoto: "/image44.jpg",
    },
    {
      id: 45,
      daycare_id: 15,
      daycarephoto: "/image45.jpg",
    },
    {
      id: 46,
      daycare_id: 16,
      daycarephoto: "/image46.jpg",
    },
    {
      id: 47,
      daycare_id: 16,
      daycarephoto: "/image47.jpg",
    },
    {
      id: 48,
      daycare_id: 16,
      daycarephoto: "/image48.jpg",
    },
    {
      id: 49,
      daycare_id: 17,
      daycarephoto: "/image49.jpg",
    },
    {
      id: 50,
      daycare_id: 17,
      daycarephoto: "/image50.jpg",
    },
    {
      id: 51,
      daycare_id: 17,
      daycarephoto: "/image51.jpg",
    },
    {
      id: 52,
      daycare_id: 18,
      daycarephoto: "/image52.jpg",
    },
    {
      id: 53,
      daycare_id: 18,
      daycarephoto: "/image53.jpg",
    },
    {
      id: 54,
      daycare_id: 18,
      daycarephoto: "/image54.jpg",
    },
    {
      id: 55,
      daycare_id: 19,
      daycarephoto: "/image55.jpg",
    },
    {
      id: 56,
      daycare_id: 19,
      daycarephoto: "/image56.jpg",
    },
    {
      id: 57,
      daycare_id: 19,
      daycarephoto: "/image57.jpg",
    },
    {
      id: 58,
      daycare_id: 20,
      daycarephoto: "/image58.jpg",
    },
    {
      id: 59,
      daycare_id: 20,
      daycarephoto: "/image59.jpg",
    },
    {
      id: 60,
      daycare_id: 20,
      daycarephoto: "/image60.jpg",
    },
    {
      id: 61,
      daycare_id: 1,
      daycarephoto: "/image3b.jpg"
    },
    {
      id: 62,
      daycare_id: 2,
      daycarephoto: "/image6b.jpg"
    },
    {
      id: 63,
      daycare_id: 3,
      daycarephoto: "/image9b.jpg"
    },
    {
      id: 64,
      daycare_id: 4,
      daycarephoto: "/image12b.jpg"
    },
    {
      id: 65,
      daycare_id: 5,
      daycarephoto: "/image15b.jpg"
    },
    {
      id: 66,
      daycare_id: 6,
      daycarephoto: "/image18b.jpg"
    },
    {
      id: 67,
      daycare_id: 7,
      daycarephoto: "/image21b.jpg"
    },
    {
      id: 68,
      daycare_id: 8,
      daycarephoto: "/image24b.jpg"
    },
    {
      id: 69,
      daycare_id: 9,
      daycarephoto: "/image27b.jpg"
    },
    {
      id: 70,
      daycare_id: 10,
      daycarephoto: "/image30b.jpg"
    },
    {
      id: 71,
      daycare_id: 11,
      daycarephoto: "/image33b.jpg"
    },
    {
      id: 72,
      daycare_id: 12,
      daycarephoto: "/image36b.jpg"
    },
    {
      id: 73,
      daycare_id: 13,
      daycarephoto: "/image39b.jpg"
    },
    {
      id: 74,
      daycare_id: 14,
      daycarephoto: "/image42b.jpg"
    },
    {
      id: 75,
      daycare_id: 15,
      daycarephoto: "/image45b.jpg"
    },
    {
      id: 76,
      daycare_id: 16,
      daycarephoto: "/image48b.jpg"
    },
    {
      id: 77,
      daycare_id: 17,
      daycarephoto: "/image51b.jpg"
    },
    {
      id: 78,
      daycare_id: 18,
      daycarephoto: "/image54b.jpg"
    },
    {
      id: 79,
      daycare_id: 19,
      daycarephoto: "/image57b.jpg"
    },
    {
      id: 80,
      daycare_id: 20,
      daycarephoto: "/image60b.jpg"
    }
  ]);
};
