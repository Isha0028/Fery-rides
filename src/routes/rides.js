import Ride from "../models/ride.js";
import express from 'express'

// Fetch all rides
const router = express.Router();
router.get("/rides", async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// Fetch ride by ID
router.get("/rides/:_id", async (req, res) => {
  try {
    const ride = await Ride.findById(req.params._id);
    if (!ride) {
      return res.status(404).json({ message: "Ride not found" });
    }
    res.status(200).json(ride);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

//EXAMPLE 1
/*
req --> http://localhost:5000/api/rides

res --> [
    {
        "_id": "676c145e2edf5745cf07251c",
        "distance": "25 km",
        "fare": "$40"
    },
    {
        "_id": "676c14b02edf5745cf07251d",
        "distance": "20 km",
        "fare": "$35"
    },
    {
        "_id": "676c14e42edf5745cf07251e",
        "distance": "15 km",
        "fare": "$27"
    },
    {
        "_id": "676c15192edf5745cf07251f",
        "distance": "5km",
        "fare": "$10"
    }
]
*/

//EXAMPLE 2
/*
req --> http://localhost:5000/api/rides/676c15192edf5745cf07251f

res --> 
{
    "_id": "676c15192edf5745cf07251f",
    "distance": "5km",
    "fare": "$10"
}
*/ 