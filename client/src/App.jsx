import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/NavBar";
import JobList from "./pages/JobList";
import JobCreate from "./pages/JobCreate";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/create" element={<JobCreate />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
