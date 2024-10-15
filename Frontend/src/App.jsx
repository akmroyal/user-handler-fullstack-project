import Create from './component/Create.jsx';
import Navbar from './component/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './component/Read.jsx';
import Update from './component/Update.jsx';
import Home from './component/Home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/all" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
