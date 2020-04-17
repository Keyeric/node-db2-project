exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          Make: "Subaru",
          Model: "BRZ",
          VIN_Num: 12345678987654321,
          Mileage: 20432,
          AutomaticTransmission: "false",
          TitleStatus: "Clean",
        },
        {
          Make: "Tesla",
          Model: "Model 3",
          VIN_Num: 98765432123456789,
          Mileage: 999999,
          AutomaticTransmission: "true",
          TitleStatus: "Salvage",
        },
        {
          Make: "Toyota",
          Model: "Camry",
          VIN_Num: 23456789876543212,
          Mileage: 000001,
          AutomaticTransmission: "",
          TitleStatus: "",
        },
      ]);
    });
};
