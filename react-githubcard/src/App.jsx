import React, { useState } from "react";

const Card = ({ user }) => (
  <div className="card" style={{
    width: 270,
    height: 350,
    border: "1px solid white",
    marginTop: 65,
    background: "#222",
    color: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 16px rgba(0,0,0,0.18)"
  }}>
    <div className="img" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 5 }}>
      <img src={user.avatar_url} alt="" style={{ width: 250, height: 250, borderRadius: 8 }} />
    </div>
    <div className="main-info" style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: 0, fontSize: 18 }}>
      <div className="info" style={{ display: "flex", justifyContent: "space-between", height: 26 }}>
        <p>{user.login}</p>
        <p>publicRepos: {user.public_repos}</p>
      </div>
      <div className="fllow" style={{ display: "flex", justifyContent: "space-between" }}>
        <p>followers: {user.followers}</p>
        <p>following: {user.following}</p>
      </div>
    </div>
  </div>
);

export default function GithubCard() {
  const [username, setUsername] = useState("");
  const [cards, setCards] = useState([]);

  const fetchUser = async (name) => {
    if (!name) return;
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
      const data = await res.json();
      if (data && data.login) {
        setCards((prev) => [...prev, data]);
      } else {
        alert("User not found!");
      }
    } catch {
      alert("Error fetching user!");
    }
  };

  // Load default card on mount
  React.useEffect(() => {
    fetchUser("sachinjaiswal111");
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ background: "gray", minHeight: "100vh",width:"100vw", padding: "32px" }}>
      <div className="input" style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Enter your github username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: 500, height: 60, fontSize: 18, borderRadius: 8, border: "1px solid #ccc", marginRight: 8 }}
        />
        <button
          onClick={() => { fetchUser(username); setUsername(""); }}
          style={{ height: 60, fontSize: 18, borderRadius: 8, background: "#222", color: "#fff", border: "none", padding: "0 24px", cursor: "pointer" }}
        >
          Add my githubCard
        </button>
      </div>
      <div className="cards" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {cards.map((user, idx) => <Card user={user} key={user.login + idx} />)}
      </div>
    </div>
  );
}