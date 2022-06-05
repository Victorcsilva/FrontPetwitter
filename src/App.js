import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";
import Feed from "./routes/Feed";
import Signup from "./routes/Signup";
import Menu from "./components/Menu";
import Perfil from "./routes/Perfil";
import Sair from "./components/Sair";
import Layout from "./routes/Layout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Sair" element={<Sair />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Layout" element={<Layout />} />

        <Route
          path="/protected"
          element={
            <RequireAuth>
              <ProtectedPage />
              {/* <Route path="/feed" element={<Feed />} /> */}
              <Route path="/prefil" element={<Perfil />} />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
