import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Menu from "./components/Menu";
import Perfil from "./routes/Perfil";
import Sair from "./components/Sair";
import Home from "./routes/Home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* {<Route path="/" element={<PublicPage />} />} */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Menu />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/prefil"
            element={
              <RequireAuth>
                <Perfil />
              </RequireAuth>
            }
          />
          <Route
            path="/perfil/:user_id"
            element={
              <RequireAuth>
                <Perfil />
              </RequireAuth>
            }
          />
          <Route
            path="/Sair"
            element={
              <RequireAuth>
                - <Sair />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
