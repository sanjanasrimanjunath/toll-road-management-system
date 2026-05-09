import { useState } from "react";

import { payToll } from "../services/tollService";

function PayToll() {

  const [formData, setFormData] = useState({
    vehicleNumber: "",
    tollAmount: "",
    tollGate: "",
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

      const data = await payToll(formData);

      alert(data.message);

      setFormData({
        vehicleNumber: "",
        tollAmount: "",
        tollGate: "",
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Toll Payment Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[450px]">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Pay Toll
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

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
            type="number"
            name="tollAmount"
            placeholder="Toll Amount"
            value={formData.tollAmount}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="tollGate"
            placeholder="Toll Gate"
            value={formData.tollGate}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Pay Toll
          </button>

        </form>

      </div>

    </div>
  );
}

export default PayToll;