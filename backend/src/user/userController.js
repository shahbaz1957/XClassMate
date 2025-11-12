import createHttpError from "http-errors";
import userModel from "./userModel.js";
import bcrypt from "bcrypt";

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(createHttpError(400, "All user fields are required"));
  }

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return next(createHttpError(400, "User already exists with this email"));
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    //console.log("New User:", newUser);

    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Error while creating user"));
  }
};

export { createUser };
