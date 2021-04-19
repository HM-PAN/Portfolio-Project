import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from './components/Navbar'
import Hearder from './components/Header'
function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}
    />
<Navbar/>
<Hearder/> 
</>
  );
}

export default App;
