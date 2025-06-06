import userModel from "../models/user.model.js";

const createUser = async ({ firstName, lastName = "", email, phoneNumber, password }) => {
  if (!firstName || !email || !phoneNumber || !password) {
    throw new Error("All fields are required");
  }

  const user = await userModel.create({
    fullName: { firstName, lastName },
    email,
    phoneNumber,
    password,
  });

  return user;
};

export default createUser;
