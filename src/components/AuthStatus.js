import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { Routes, Route } from "react-router-dom";
import { Feed } from "../routes/Feed";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <Route path="/" element={<Feed />} />;
  }

  return (
    <p>
      Bem vindo(a) {auth.user?.name}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
}

export default AuthStatus;
