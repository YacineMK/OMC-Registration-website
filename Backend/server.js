require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const Participant = require("./models/Participant");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");

console.log(process.env.MONGO_URI)
mongoose
  .connect(process.env.MONGO_URI)
  .catch((error) => {
    console.log("Connection to database failed:", error);
  })
  .then(() => {
    console.log("Successfully connected to database");
  });

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.post(
  "/register",
  [
    check("email", "email is required !").not().isEmpty(),
    check("email", "Invalid email !").isEmail().isLength({ min: 10, max: 30 }),
    check("name", "fullname is required !").not().isEmpty(),
    check("name", "Please enter your real name !").isLength({
      min: 5,
      max: 50,
    }),
    check("phone", "Invalid phone number!").isLength({ min: 10, max: 10 }),
    check("university", "university field is required !").not().isEmpty(),
    check("matricule", "ID number field is required !").not().isEmpty(),
    check("field", "Study field is required !").not().isEmpty(),
    // check("discord", "D is required !").not().isEmpty(),
    check("motivation", "Motivation is required !").not().isEmpty(),
    // check('motivation', 'FirstName length should be 3 to 30 characters').isLength({ min: 5, max: 50 }),
    // check('lastname', 'Lastname is required').not().isEmpty(),
    // check('lastname', 'LastName length should be 3 to 30 characters')
    //                 .isLength({ min: 3, max: 30 })
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(200).json({ err: true, errors: errors.errors });

      const exists = await Participant.findOne({
        email: req.body.email,
      }).exec();
      if (exists)
        return res
          .status(200)
          .json({ err: true, errors: [{ msg: "Email already registered !" }] });

      const newParticipant = new Participant({
        name: req.body.name.toLowerCase(),
        email: req.body.email.toLowerCase(),
        phone: req.body.phone,
        university: req.body.phone,
        matricule: req.body.phone,
        field: req.body.phone,
        // lastname: req.body.lastname.toLowerCase(),
        // level: req.body.level.toLowerCase(),
        discord: req.body.discord.toLowerCase(),
        motivation: req.body.motivation.toLowerCase(),
      });

      const result = await newParticipant.save();
      if (result)
        return res
          .status(200)
          .json({ err: false, msg: "Successfully registered !" });
      return res
        .status(200)
        .json({ err: true, errors: [{ msg: "Something went wrong !" }] });
    } catch (err) {
      console.log("something went wrong : " + err.message);
      return res
        .status(200)
        .json({ err: true, errors: [{ msg: "Something went wrong !" }] });
    }
  }
);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
