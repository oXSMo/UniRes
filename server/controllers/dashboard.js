import Room from "../models/room.module.js";
import User from "../models/user.module.js";

export const createUser = async (req, res) => {
  try {
    const { fullName, room, status, email, password, phoneNumber, role } =
      req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(402).json({ error: "Email Already Exist" });

    const newUser = await User.create({
      email,
      fullName,
      phoneNumber,
      password,
      room,
      status,
      role,
    });
    if (newUser) res.status(201).json({ message: "created successfuly" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const createRoom = async (req, res) => {
  try {
    const { status, type, wing, number } = req.body;
    console.log({ status, type, wing, number });

    const room = await Room.findOne({ number });
    if (room)
      return res.status(402).json({ error: "Room Number Already Exist" });

    const Newroom = await Room.create({
      status,
      type,
      wing,
      number,
    });

    res.status(201).json({ Newroom });
  } catch (error) {
    res.status(403).json(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password").populate("room");
    res.status(201).json(users);
  } catch (error) {
    res.status(403).json({ error });
  }
};

export const getRooms = async ({ query }, res) => {
  try {
    const args = {};
    console.log({ wing: query.wing });

    if (query.wing) args.wing = query.wing;
    console.log({ args });

    const rooms = await Room.find(args);

    res.status(201).json(rooms);
  } catch (error) {
    res.status(403).json(error);
  }
};
