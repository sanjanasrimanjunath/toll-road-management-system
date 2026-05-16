import axios from "axios";

const API_URL = "https://toll-backend-vjbi.onrender.com";

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