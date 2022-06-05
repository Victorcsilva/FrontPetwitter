import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";
import Feed from "./routes/Feed";
import Signup from "./routes/Signup";
import PageMenu from "./components/Menu";
import Perfil from "./routes/Perfil";
import Sair from "./components/Sair";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Menu" element={<PageMenu />} />
        <Route path="/Sair" element={<Sair />} />

        <Route
          path="/protected"
          element={
            <RequireAuth>
              <ProtectedPage />
              <Route path="/feed" element={<Feed />} />
              <Route path="/prefil" element={<Perfil />} />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
