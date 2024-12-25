# Fery-rides

A Node.js-based RESTful API for managing users and rides, backed by MongoDB.

## Features

- **User Registration:** Register users with a username and password.
- **List Rides:** Fetch a list of available rides.
- **Ride Details:** Fetch detailed information about a specific ride.

## Prerequisites

1. **Node.js** (v16 or later)
2. **MongoDB** (Running locally or on MongoDB Atlas)
3. **Postman** (for testing APIs)


## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Isha0028/Fery-rides
cd Fery rides
```

### 2. Install Dependencies

```bash
npm init
npm install express mongoose body-parser dotenv bcrypt
npm install --save-dev nodemon
```

### 3. Configure MongoDB

- If using a local MongoDB instance, no changes are required.
- If using MongoDB Atlas:
   1) Create a cluster on MongoDB Atlas.
   2)  Replace the MongoDB connection string in .env file.


### 4. Seed Data

To prepopulate the database with rides:

- Open a MongoDB shell or use a GUI tool like Compass.
- Run the following commands:
```javascript
use rideApp
db.rides.insertMany([
    { distance: "10 km", fare: "$15" },
    { distance: "25 km", fare: "$40" },
    { distance: "5 km", fare: "$7" }
])
```

## Running the Server

```bash
npm run server
```



## API Documentation

1. **Register User**
   - Endpoint: POST /api/register
   - Request Body:
   
```json
{
  "username": "testuser",
  "password": "password123"
}
```
   - Response:

```json
{
  "message": "User registered successfully"
}
```

2. **List Rides**
   - Endpoint: GET /api/rides
   - Response:

```json
[
  {
    "_id": "ride1_id",
    "distance": "10 km",
    "fare": "$15"
  },
  {
    "_id": "ride2_id",
    "distance": "25 km",
    "fare": "$40"
  },
  {
    "_id": "ride3_id",
    "distance": "5 km",
    "fare": "$7"
  }
]
```

3. **Ride Details**
   - Endpoint: GET /api/rides/:id
   - Example: GET /api/rides/ride1_id
   - Response:

```json

{
  "_id": "ride1_id",
  "distance": "10 km",
  "fare": "$15"
}
```



## Testing with Postman

1. **Import the Collection:**
- Open Postman.
- Create a new collection for "Ferry Rides API".

2. **Add Requests:**
 - Register User:
   - Method: POST
   - URL: http://localhost:5000/api/register
   - Body: Raw JSON
```json
{
  "username": "testuser",
  "password": "password123"
}
```
 - List Rides:
    - Method: GET
    - URL: http://localhost:5000/api/rides
- Ride Details:
    - Method: GET
    - URL: http://localhost:5000/api/rides/<ride_id>
    
3. **Send Requests and Validate Responses.**

## Error Handling
- **400 Bad Request:** Invalid or missing input fields.
- **404 Not Found:** Requested resource does not exist.
- **500 Internal Server Error:** Server-side errors.

  
## Project Dependencies
- **express:** For building the API.
- **mongoose:** For database interaction.
- **nodemon:** For development (hot-reloading).


