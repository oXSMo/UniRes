import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    number: { type: String, required: true },
    wing: { type: String },
    type: { type: String },
    status: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model("Room", roomSchema);
