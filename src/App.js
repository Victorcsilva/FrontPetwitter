import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";
import Feed from './routes/Feed'
import Cadastro from './routes/Cadastro'

function App() {
  return (
    <AuthProvider>
      <Routes>

          <Route path="/" element={<PublicPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>


          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
                <Route path="/feed" element={<Feed />}/>
              </RequireAuth>
            }
          />
      </Routes>
    </AuthProvider>
  );
}

export default App;
