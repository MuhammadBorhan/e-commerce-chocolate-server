const mongoose = require("mongoose");
const validator = require("validator");

// Schema Design
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your first name"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide your last name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      validate: [validator.isEmail, "provide a valid email"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      //   validate: {
      //     validator: (value) =>
      //       validator.isStrongPassword(value, {
      //         minLength: 6,
      //         minLowercase: 3,
      //         minNumbers: 1,
      //         minUppercase: 1,
      //         minSymbols: 1,
      //       }),
      //     message: "Password {VALUE} is not strong enough",
      //   },
      trim: true,
      minLength: 6,
      lowercase: true,
    },
    confirmPassword: {
      type: String,
      //   validate: {
      //     validator: function (value) {
      //       return value == this.password;
      //     },
      //     message: "Password don't match",
      //   },
    },
    mobile: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Users = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = Users;
