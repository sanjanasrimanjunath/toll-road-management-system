import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="font-bold text-2xl">
        Toll Management
      </h1>

      <div className="space-x-4">

        <Link to="/">Home</Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/add-vehicle">
          Add Vehicle
        </Link>

        <Link to="/vehicles">
          Vehicles
        </Link>

        <Link to="/pay-toll">
          Pay Toll
        </Link>

        <Link to="/transactions">
          Transactions
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;