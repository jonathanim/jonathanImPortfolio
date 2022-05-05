import Main from './components/Main';
import About from '../src/components/About'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './components/Projects';
import MyStack from './components/MyStack';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
