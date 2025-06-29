import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { Body } from "./components/Body";
import Login from "./components/Login";
import Feeds from "./components/Feeds";
import ConnectionsPage from "./components/ConnectionsPage";
import ConnectionRequests from "./components/ConnectionRequest";
import TinderLandingPage from "./components/LandingPage";
import TinderSignup from "./components/SignUp";

function App() {
  return (
    <div className="bg-red-300 w-full">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/landing" element={<TinderLandingPage />} />
          <Route path="/" element={<Body />}>
            <Route path="/signup" element={<TinderSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feeds" element={<Feeds />} />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route path="/request" element={<ConnectionRequests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
