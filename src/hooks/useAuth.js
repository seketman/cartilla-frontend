import { useCallback, useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const fetchUser = useCallback((jwtToken) => {
    if (!jwtToken) return;
    fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
      .then(async (res) => {
        if (res.status === 401) {
          const data = await res.json();
          if (data.detail === "cartillaia_token_expired") {
            console.warn("⚠️ Token expirado → intentando refresh");
            return refreshToken(jwtToken);
          }
        }
        return res.json();
      })
      .then((data) => {
        if (data && !data.error && data.sub) {
          setUser(data);
        }
      })
      .catch((err) => console.error("Error al obtener usuario:", err));
  }, []);

  const refreshToken = useCallback((expiredToken) => {
    return fetch(`${API_URL}/refresh`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${expiredToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          console.info("🔄 Token refrescado");
          localStorage.setItem("token", data.token);
          setToken(data.token);
          fetchUser(data.token);
        } else {
          console.error("❌ No se pudo refrescar token");
          logout();
        }
      });
  }, [fetchUser]);

  const login = (os_key) => {
    window.location.href = `${API_URL}/login/${os_key}`;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    window.location.href = "/";
  };

  useEffect(() => {
    // Detectar token en query param (ej: callback login)
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
  }, [token, fetchUser]);

  return {
    user,
    token,
    login,
    logout,
    refreshToken,
  };
}
