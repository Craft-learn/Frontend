import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import "./tailwind.css";
import SignUp from "./pages/Signup";
import ContextProvider from "./context/index";
import HomePage from "./pages/HomePage";
import Assessment from "./pages/Assessment";
import DashboardLayout from "./components/DashboardLayout";
import CertificateCard from "./pages/Download";
import Certificate from "./pages/Certificates";
import CoursesPage from "./pages/Courses";
import { Toaster } from "sonner";


function App() {
  return (
    <div>
        <Toaster />
        <ContextProvider>
          <ToastContainer />
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<HomePage />} />
                <Route path="assessments" element={<Assessment />} />
                <Route
                  path="completed-assessment"
                  element={<CertificateCard />}
                />
                <Route path="certificates" element={<Certificate />} />
                <Route path="courses" element={<CoursesPage />} />
              </Route>
            </Routes>
          </Router>
        </ContextProvider>
    </div>
  );
}

export default App;
