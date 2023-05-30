import "../styles/App.css";
import Layout from "./Layout";
import Nav from "./Nav";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/Signup" element={<PublicRoute />}>
              <Route path="Signup" element={<Signup />} />
            </Route>

            <Route path="/Login" element={<PublicRoute />}>
              <Route path="Login" element={<Login />} />
            </Route>

            <Route exact path="/Quiz" element={<PrivateRoute />}>
              <Route path="quiz" element={<Quiz />} />
            </Route>

            <Route exact path="/Result" element={<PrivateRoute />}>
              <Route path="result" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
