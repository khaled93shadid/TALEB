import './App.css';
import Home from './funcomponents/Home';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav1 from './funcomponents/Nav1';
import Nav2 from './funcomponents/Nav2';

function App() {
  return (
    <Router>
    
    <Nav2/>
    <Nav1 />
      

            <Routes>
                        
                       <Route path='' element={<Home />} />
                            
            </Routes>

      </Router>
    
  );
}

export default App;
