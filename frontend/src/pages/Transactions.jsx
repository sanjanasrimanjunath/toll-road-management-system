import {
  useEffect,
  useState,
} from "react";

import {
  getTransactions,
} from "../services/tollService";

function Transactions() {

  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {

    fetchTransactions();

  }, []);

  const fetchTransactions =
    async () => {

      try {

        const data =
          await getTransactions();

        setTransactions(data);

      } catch (error) {

        console.log(error);
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Toll Transactions
      </h1>

      <div className="grid gap-4">

        {transactions.map((item) => (

          <div
            key={item._id}
            className="bg-white p-5 rounded-xl shadow"
          >

            <h2 className="text-2xl font-bold">
              {item.vehicleNumber}
            </h2>

            <p>
              Toll Gate: {item.tollGate}
            </p>

            <p>
              Amount Paid: ₹{item.tollAmount}
            </p>

            <p>
              Remaining Balance:
              ₹{item.remainingBalance}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Transactions;