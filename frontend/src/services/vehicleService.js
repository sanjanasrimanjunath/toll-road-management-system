import axios from "axios";

const API_URL = "http://localhost:5000/api/vehicles";

// Add Vehicle
export const addVehicle = async (vehicleData) => {

  const response = await axios.post(
    API_URL,
    vehicleData
  );

  return response.data;
};

// Get Vehicles
export const getVehicles = async () => {

  const response = await axios.get(API_URL);

  return response.data;
};