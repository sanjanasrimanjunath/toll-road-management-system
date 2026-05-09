function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Toll Road Management Dashboard
        </h1>

        <h2 className="text-2xl font-semibold mb-2">
          Welcome, {user?.name}
        </h2>

        <p className="text-gray-600">
          Email: {user?.email}
        </p>

      </div>

    </div>
  );
}

export default Dashboard;