import './App.css';
import Home from './Home';
import Chat from './Chat';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
