const express = require("express");

const drift = require("./carsModel");

const router = express.Router();

router.get("/", (req, res) => {
  drift
    .get()
    .then((wheels) => {
      res.status(200).json(wheels);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: "Server error retrieving the tricked out ricers." });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    drift
      .getByID(id)
      .then((nice) => {
        res.status(200).json(nice);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Server error retrieving specified ride",
          error: err,
        });
      });
  } else if (!id) {
    res.status(404).json({ message: `Specified ID does not exist` });
  }
});

router.post("/", (req, res) => {
  const body = req.body;

  if (body.Make && body.Model && body.VIN_Num && body.Mileage) {
    drift
      .insert(body)
      .then((newWing) => {
        res.status(201).json(newWing);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message:
            "server error creating a ride your mom wont put a sticker on",
          error: error,
        });
      });
  } else {
    res.status(400).json({
      message: `Is your car real? You need a Make, Model, VIN Number, and Mileage!`,
    });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  if (id && body.Make && body.Model && body.VIN_Num && body.Mileage) {
    drift
      .update(id, body)
      .then((updatedSpecs) => {
        res.status(201).json(updatedSpecs);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Server error updating specified protagonist",
          error: err,
        });
      });
  } else if (!id) {
    res.status(404).json({ message: `Specified ID does not exist` });
  } else if (!body.Make || !body.Model || !body.VIN_Num || !body.Mileage) {
    res.status(400).json({
      message: `Stop Lying!! You need a Make, Model, VIN Number, and Mileage!`,
    });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    drift
      .remove(id)
      .then((numberOfScrappedCrap) => {
        res.status(200).json(numberOfScrappedCrap);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Server error killing specified rice-mobile",
          error: err,
        });
      });
  } else if (!id) {
    res.status(404).json({ message: `Specified ID does not exist` });
  }
});

module.exports = router;
