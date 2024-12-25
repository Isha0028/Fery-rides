import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({
  distance: {
    type: String,
    required: true,
  },
  fare: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Ride = mongoose.model("Ride", rideSchema);

export default Ride;