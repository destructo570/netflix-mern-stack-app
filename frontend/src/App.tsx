import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import BrowsePage from "./pages/Browse";
import HomePage from "./pages/Home";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTES.BROWSE} element={<BrowsePage />} />
    </Routes>
  );
}

export default App;
