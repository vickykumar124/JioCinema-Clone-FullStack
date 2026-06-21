const UserModel = require("../Model/UserModel");

const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: "failure",
      });
    }

    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        wishlist: user.wishlist || [],
        isPremium: user.isPremium,
      },
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getUserWishlist = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: "failure",
      });
    }

    res.status(200).json({
      data: user.wishlist || [],
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const addToWishlist = async (req, res) => {
  try {
    console.log("========== WISHLIST ==========");
    console.log("userId:", req.userId);
    console.log("body:", req.body);

    const userId = req.userId;
    const { id, poster_path, name, media_type } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Movie ID is required",
        status: "failure",
      });
    }

    const user = await UserModel.findById(userId);

    console.log("user found:", !!user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: "failure",
      });
    }

    if (!Array.isArray(user.wishlist)) {
      user.wishlist = [];
    }

    const alreadyExists = user.wishlist.some(
      (item) => String(item.id) === String(id)
    );

    if (alreadyExists) {
      return res.status(400).json({
        message: "Item already in wishlist",
        status: "failure",
      });
    }

    const wishlistItem = {
      id,
      name,
      poster_path,
      media_type,
    };

    await UserModel.findByIdAndUpdate(
      userId,
      {
        $push: {
          wishlist: wishlistItem,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Added to wishlist",
      status: "success",
    });
  } catch (error) {
    console.log("Wishlist Error:", error);

    return res.status(500).json({
      message: error.message,
      status: "failure",
    });
  }
};

module.exports = {
  getCurrentUser,
  getUserWishlist,
  addToWishlist,
};