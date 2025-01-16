import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from './components/mainPage';
import ContactUs from './components/contactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
