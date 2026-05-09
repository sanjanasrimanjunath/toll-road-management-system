import { useState } from "react";

import { addVehicle } from "../services/vehicleService";

function AddVehicle() {

  const [formData, setFormData] = useState({
    ownerName: "",
    vehicleNumber: "",
    vehicleType: "",
    walletBalance: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await addVehicle(formData);

      alert(data.message);

      setFormData({
        ownerName: "",
        vehicleNumber: "",
        vehicleType: "",
        walletBalance: "",
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to add vehicle"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[450px]">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Add Vehicle
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="vehicleNumber"
            placeholder="Vehicle Number"
            value={formData.vehicleNumber}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="vehicleType"
            placeholder="Vehicle Type"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="walletBalance"
            placeholder="Wallet Balance"
            value={formData.walletBalance}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Add Vehicle
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddVehicle;