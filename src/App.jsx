import { useAuth } from "./hooks/useAuth";
import styles from "./styles/appStyles";

function App() {
  const { user, login, logout } = useAuth();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.left}>
          <div style={styles.title}>
            CartillaIA <span style={styles.titleMeta}>— OpenDev Pro</span>
          </div>
          <div style={styles.subtitle}>
            Aplicación multitenant para gestión de cartillas y autorizaciones
          </div>

          {!user ? (
            <>
              <p style={styles.description}>
                Inicia sesión con Microsoft usando la cuenta correspondiente a tu proveedor de autenticación.
                Selecciona la opción adecuada para continuar.
              </p>

              <div style={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={() => login("medife")}
                  style={styles.btnPrimary}
                  aria-label="Iniciar sesión Medifé"
                >
                  <span style={styles.btnIcon}>🏥</span>
                  Iniciar sesión Medifé
                </button>

                <button
                  type="button"
                  onClick={() => login("opendevpro")}
                  style={styles.btnSecondary}
                  aria-label="Iniciar sesión OpenDev Pro"
                >
                  <span style={styles.btnIcon}>🔒</span>
                  Iniciar sesión OpenDev Pro
                </button>
              </div>

              <div style={styles.footer}>
                <div>¿Problemas para iniciar sesión? Contacta con tu administrador.</div>
                <div style={{ marginTop: 8 }}>
                  <small style={styles.small}>OpenDev Pro — CartillaIA</small>
                </div>
              </div>
            </>
          ) : (
            <div>
              <h2 style={styles.welcomeTitle}>Bienvenido {user.name || user.email}</h2>
              <div style={{ marginTop: 12, ...styles.profileBox }}>
                <pre style={styles.pre}>{JSON.stringify(user, null, 2)}</pre>
              </div>
              <div style={{ marginTop: 12 }}>
                <button onClick={logout} style={styles.btnSecondary}>
                  Cerrar sesión
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={styles.right}>
          <div style={{ textAlign: "right" }}>
            <div style={styles.secureTitle}>Acceso seguro</div>
            <div style={styles.secureDesc}>
              Autenticación via Microsoft OAuth.<br />
              Tus credenciales no son almacenadas por CartillaIA.
            </div>
          </div>

          <div style={{ marginTop: "auto", textAlign: "right" }}>
            <div style={styles.copy}>© {new Date().getFullYear()} OpenDev Pro</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
