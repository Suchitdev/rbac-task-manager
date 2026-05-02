import { useEffect, useState } from "react";
import Tasks from "./Tasks";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>

      {user && (
        <>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>

          {user?.role === "admin" && <p>Admin Panel Access</p>}
          {user?.role === "user" && <p>User Dashboard</p>}
        </>
      )}

      <Tasks />

      <br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;