import Home from '../src/pages/Home';
// import Favorites from '../src/pages/Favorites';
import Navbar from '../src/components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useParams,
  useLocation
} from 'react-router-dom';

function App() {
  return (
    
    <Router>
        <Navbar />
          <Routes>
              <Route path='/'element={<Home />} />
              {/* <Route path='/favorites'element={<Favorites />} /> */}
          </Routes>
    </Router>
    
  );
}

export default App;
