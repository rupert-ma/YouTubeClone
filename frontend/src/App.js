import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootswatch/dist/zephyr/bootstrap.min.css"; // Added this :boom:

// Pages Imports
import SearchPage from "./pages/SearchPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center">
                <Routes>
                    <Route path="/" element={<SearchPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/VideoPage/:vidValue/"
                        element={<VideoPage />}
                    />
                </Routes>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
