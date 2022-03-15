require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const User = require("./model/user");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
   try {
    const { userName, email, password } = req.body;

    if (!(email && password && userName)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      user_name: userName,
      email: email.toLowerCase(), // sanitize
      password: encryptedUserPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
   try {
    const { userName, password } = req.body;

    if (!(userName && password)) {
      res.status(400).send("All input is required");
    }
    
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

      user.token = token;

      return res.status(200).json(user);
    }
  }
  catch(err) {
    console.log(err)
  }
    return res.status(400).send("Invalid Credentials");
    
});

module.exports = app;