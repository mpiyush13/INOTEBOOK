import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Navebar } from './components/Navebar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import { Login } from './components/Login';
import { Sinup } from './components/Sinup';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }



  return (<>
  <NoteState>
  <Router>
  <Navebar/>
  <Alert alert={alert}/>
  <div className='container'>

  
  <Routes>
  <Route exact path="/"  element={<Home showAlert={showAlert}/>}  />
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/login"  element={<Login showAlert={showAlert}/>}  />
      <Route exact path="/sinup" element={<Sinup showAlert={showAlert}/>}/>
        </Routes>
        </div>
  </Router>
 
  </NoteState>

 
  
  
  </>
   
  );
}

export default App;
