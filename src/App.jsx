import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const fetchUser = (jwtToken) => {
    fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error === "token_expired") {
          refreshToken();
        } else if (!data.error) {
          setUser(data);
        }
      });
  };

  const refreshToken = () => {
    fetch(`${API_URL}/refresh`, { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          fetchUser(data.token);
        }
      });
  };

  useEffect(() => {
    // Obtener token de query param si existe
    const params = new URLSearchParams(window.location.search);
    const newToken = params.get("token");

    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
      window.history.replaceState({}, "", "/dashboard");
    }

    if (token) {
      fetchUser(token);
    }
  }, [token]);

  const handleLogin = (os_key) => {
    window.location.href = `${API_URL}/login/${os_key}`;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    window.location.href = "/";
  };

  return (
    <div style={{ padding: 20 }}>
      {!user ? (
        <ul>
          <li>
            <button onClick={() => handleLogin('medife')}>
              Iniciar sesión con Microsoft (Medifé)
            </button>
          </li>
          <li>
            <button onClick={() => handleLogin('osde')}>
              Iniciar sesión con Microsoft (Otros)
            </button>
          </li>
        </ul>
      ) : (
        <div>
          <h2>Bienvenido {user.name || user.email}</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
}

export default App;
