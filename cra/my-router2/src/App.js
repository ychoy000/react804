import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MainPage from './pages/MainPage';
import SubPage from './pages/SubPage';

function App() {
  return (
    <BrowserRouter>
      <nav className= "gnb" style={{ padding: '10px' }}></nav>
      <Link to="/" className="gnb_link">Main</Link>
      <Link to="/sub">Sub</Link>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/sub" element={<SubPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
