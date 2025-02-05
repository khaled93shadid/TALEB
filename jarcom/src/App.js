import './App.css';
import Home from './funcomponents/Home';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav2 from './funcomponents/Nav2';
import Login from './funcomponents/login2';
import Signup from './funcomponents/signup';
import Profile from './funcomponents/profile';
import Whatsnew from './funcomponents/whatsnew';


function App() {
  return (
    <Router>
    
    <Nav2/>   
      

            <Routes>
                        
                       <Route path='/Home.js' element={<Home />} />
                       <Route path='/login.js' element={<Login />} />
                       <Route path='/signup.js' element={<Signup />} />
                       <Route path='/profile.js' element={<Profile />} />
                       <Route path='/whatsnew.js' element={<Whatsnew />} />
                    
                            
            </Routes>

      </Router>
    
  );
}

export default App;
