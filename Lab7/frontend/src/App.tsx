import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Course from "./pages/Course";
import Home from './pages/Home';
function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
    </Router>
  )
}

export default App
