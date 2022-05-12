import Main from './components/Main';
import AboutMe from './components/AboutMe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
