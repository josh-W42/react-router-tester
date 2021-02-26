import './App.css';
import Procedures from './componets/Procedures';
import Procedure from './componets/Procedure';
import Home from './Home';
import Contact from './componets/Contact';

// Get the <Router />, <Route />, and <Link /> components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul className="navLinks">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/procedures'>Procedures</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    {/* Ok so look, the exact property, we will get ONLY that route */}
      <>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/procedures/:type" render={(props) => {
          return <Procedure {...props} />
        }} />
        <Route path="/contact" render={() => <Contact dentist={"Mr Clean"} />} />
      </>
    </Router>
  );
}

export default App;
