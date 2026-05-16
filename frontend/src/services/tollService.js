import axios from "axios";

const API_URL =
  "https://toll-backend-vjbi.onrender.com/api/toll";

// Pay Toll
export const payToll = async (tollData) => {

  const response = await axios.post(
    `${API_URL}/pay`,
    tollData
  );

  return response.data;
};

// Get Transactions
export const getTransactions =
  async () => {

    const response = await axios.get(
      `${API_URL}/transactions`
    );

    return response.data;
};