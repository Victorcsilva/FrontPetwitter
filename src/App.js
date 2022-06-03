import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";
import Feed from './routes/Feed'
import Signup from './routes/Signup'
import PageMenu from "./routes/Menu";

function App() {
  return (
    <AuthProvider>
      <Routes>

          <Route path="/" element={<PublicPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Menu" element={<PageMenu/>}/>
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
                <Route path="/feed" element={<Feed/>}/>
              </RequireAuth>
            }
          />
      </Routes>
    </AuthProvider>
  );
}

export default App;
