// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AlbumPage from './pages/AlbumPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;

