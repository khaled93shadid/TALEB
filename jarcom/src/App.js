import './App.css';
import Home from './funcomponents/Home';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav1 from './funcomponents/Nav1';

function App() {
  return (
    <>
    <Nav1 />
      <Router>

            <Routes>
                          
                       <Route path='' element={<Home />} />
                            
            </Routes>

      </Router>
    </>
  );
}

export default App;
