import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, city, mobile } = req.body;
    if (!name || !email || !password || !address || !city || !mobile) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "Email already taken",
      });
    }
    const user = await userModel.create({
      name,
      email,
      password,
      address,
      city,
      mobile,
    });
    res.status(201).send({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.log("Error registering user ", error);
    res.status(500).send({
      success: false,
      message: "Error registering user",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please use your email and password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = user.generateToken();
    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV === "developent" ? true : false,
        httpOnly: process.env.NODE_ENV === "developent" ? true : false,
        sameSite: process.env.NODE_ENV === "developent" ? true : false,
      })
      .send({
        success: true,
        message: "Login successful",
        token,
        user,
      });
  } catch (error) {
    console.log("Error logging in ", error);
    res.status(500).send({
      success: false,
      message: "Error logging in",
      error,
    });
  }
};

export const getUserProfileController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Profile fetched successfully",
      user,
    });
  } catch (error) {
    console.log("Error fetching user profile ", error);
    res.status(500).send({
      success: false,
      message: "Error fetching user profile",
      error,
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        secure: process.env.NODE_ENV === "developent" ? true : false,
        httpOnly: process.env.NODE_ENV === "developent" ? true : false,
        sameSite: process.env.NODE_ENV === "developent" ? true : false,
      })
      .send({
        success: true,
        message: "Logout successful",
      });
  } catch (error) {
    console.log("Error logging out ", error);
    res.status(500).send({
      success: false,
      message: "Error logging out",
      error,
    });
  }
};
