import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import AddVehicle from "./pages/AddVehicle";
import Vehicles from "./pages/Vehicles";

import PayToll from "./pages/PayToll";
import Transactions from "./pages/Transactions";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/add-vehicle"
          element={<AddVehicle />}
        />

        <Route
          path="/vehicles"
          element={<Vehicles />}
        />

        <Route
          path="/pay-toll"
          element={<PayToll />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;