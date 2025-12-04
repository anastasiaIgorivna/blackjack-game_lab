import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import GameSettings from './pages/GameSettings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game/:userId" element={<GamePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/settings" element={<GameSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



