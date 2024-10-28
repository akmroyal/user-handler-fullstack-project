import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Create from './component/Create.jsx';
import Navbar from './component/Navbar.jsx';
import Read from './component/Read.jsx';
import Update from './component/Update.jsx';
import Home from './component/Home.jsx';
import UserProfileCard from './component/UserProfileCard.jsx';

function App() {
  // This hook provides information about the current route.
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar if not on the "/create" route */}
      {location.pathname !== '/all' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/all" element={<Read />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/card" element={<UserProfileCard />} />
      </Routes>
    </div>
  );
}

function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default MainApp;
