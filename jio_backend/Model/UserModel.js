const mongoose = require("mongoose");

const wishlistItemSchema = new mongoose.Schema({
  poster_path: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "Unknown",
  },
  id: {
    type: String,
    required: true,
  },
  media_type: {
    type: String,
    default: "movie",
  },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },

    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password should be at least 6 characters"],
    },

    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords do not match",
        },
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "feed curator", "moderator"],
    },

    otp: String,

    otpExpiry: Date,

    isPremium: {
        type: Boolean,
        default: false,
    },

    wishlist: [wishlistItemSchema],
});

/******** Hooks ********/

userSchema.pre("save", function () {
    console.log("Pre save was called");

    // confirmPassword DB me save nahi hoga
    this.confirmPassword = undefined;
});

userSchema.post("save", function () {
    console.log("Post save was called");
});

/******** Model ********/

const UserModel =
    mongoose.models.User ||
    mongoose.model("User", userSchema);

module.exports = UserModel;