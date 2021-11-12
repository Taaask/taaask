import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Checklists from './pages/Checklists';
import Home from './pages/Home';
import './styles/index.css';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
	  		  <Route path="/checklists" element={<Checklists />} />
	  	  </Routes>
      </BrowserRouter>
    </div>
  )
}
