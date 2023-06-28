import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { Badge, Button } from "@mui/material";


function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const fetchUserData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  function refreshPage() {
    window.location.reload(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let searched = users.filter(
      (user) =>
        user.first_name.toString().toLowerCase() ===
        name.toString().toLowerCase()
    );
    if (searched.length === 0) alert("No User Found");
    searched.length === 0 ? refreshPage() : setUsers(searched);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: "center" }}>GreenDzine</h1>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              value={name}
              style={{ padding: "10px", borderRadius: "5px" }}
              onChange={(e) => setName(e.target.value)}
            />

            <Button
              variant="outlined"
              color="primary"
              type="submit"
              style={{
                margin: "0px 10px",
                padding: "5px",
                borderRadius: "8px",
                fontSize: "15px",
                fontFamily: "cursive",
              }}
            >
              Search
            </Button>
          </form>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {users.length > 0 && (
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                margin: "2.9rem",
                // marginLeft:"10rem"
              }}
            >
              {users.map((user) => (
                // <li key={user.id}>{user.first_name}</li>
                <div style={{ margin: "1rem 3.2rem" }} key={user.id}>
                  <Badge badgeContent={user.id} color="primary">
                    <Card
                      key={user.id}
                      user={user}
                      className="p-overlay-badge"
                    />
                  </Badge>
                  <h3 style={{ marginTop: "0.2rem", textAlign: "center" }}>
                    {user.first_name}
                  </h3>
                </div>
              ))}
            </ul>
          )}
        </div>
      </header>
      <footer style={{ textAlign: "center" }}>
        <p onClick={refreshPage}>Home</p>
      </footer>
    </div>
  );
}

export default App;
