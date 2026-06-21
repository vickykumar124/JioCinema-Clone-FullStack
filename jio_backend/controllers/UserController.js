const UserModel = require("../Model/UserModel");

const getCurrentUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        status: "failure",
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: "success",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        wishlist: user.wishlist || [],
        isPremium: user.isPremium,
      },
    });
  } catch (error) {
    console.error("Get Current User Error:", error);

    return res.status(500).json({
      status: "failure",
      message: error.message,
    });
  }
};

const getUserWishlist = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        status: "failure",
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: user.wishlist || [],
    });
  } catch (error) {
    console.error("Get Wishlist Error:", error);

    return res.status(500).json({
      status: "failure",
      message: error.message,
    });
  }
};

const addToWishlist = async (req, res) => {
  try {
    console.log("========== WISHLIST ==========");
    console.log("userId:", req.userId);
    console.log("body:", JSON.stringify(req.body, null, 2));

    const { id, poster_path, name, media_type } = req.body;

    if (!req.userId) {
      return res.status(401).json({
        status: "failure",
        message: "Unauthorized",
      });
    }

    if (!id) {
      return res.status(400).json({
        status: "failure",
        message: "Movie ID is required",
      });
    }

    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        status: "failure",
        message: "User not found",
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
        status: "failure",
        message: "Item already in wishlist",
      });
    }

    user.wishlist.push({
      id: String(id),
      name: name || "Untitled",
      poster_path: poster_path || "",
      media_type: media_type || "movie",
    });

    await user.save();

    return res.status(200).json({
      status: "success",
      message: "Added to wishlist",
      data: user.wishlist,
    });
  } catch (error) {
    console.error("Wishlist Error:", error);

    return res.status(500).json({
      status: "failure",
      message: error.message,
    });
  }
};

module.exports = {
  getCurrentUser,
  getUserWishlist,
  addToWishlist,
};