import { useEffect, useState } from "react";

import { getVehicles } from "../services/vehicleService";

function Vehicles() {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {

    fetchVehicles();

  }, []);

  const fetchVehicles = async () => {

    try {

      const data = await getVehicles();

      setVehicles(data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Vehicles
      </h1>

      <div className="grid gap-4">

        {vehicles.map((vehicle) => (

          <div
            key={vehicle._id}
            className="bg-white p-5 rounded-xl shadow"
          >

            <h2 className="text-2xl font-bold">
              {vehicle.ownerName}
            </h2>

            <p>
              Vehicle No: {vehicle.vehicleNumber}
            </p>

            <p>
              Type: {vehicle.vehicleType}
            </p>

            <p>
              Wallet: ₹{vehicle.walletBalance}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Vehicles;