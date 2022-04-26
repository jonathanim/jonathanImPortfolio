import Main from './components/Main';
import About from '../src/components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './components/Projects';

function App() {
  return (
    <Router>

      <Main />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Router>


  );
}

export default App;
