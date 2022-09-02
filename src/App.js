import './App.css';
<<<<<<< HEAD
//import Banner from './components/banner/banner.component.jsx'
import DisplayIP, { IP_Types } from './components/display-ip/display-ip.component';
//import Exhibit from './components/exhibit/exhibit.component';
=======
import Banner from './components/banner/banner.component.jsx'
import DisplayIP, { IP_Types } from './components/display-ip/display-ip.component';
import Exhibit from './components/exhibit/exhibit.component';
>>>>>>> afe6c4b6b9c4397b3a3511e5c190feeaf488307b
import PaylonLatency from './components/pylon-latency/pylon-latency.component';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
=======
      <Banner title={"Sextent"}/>
      <Exhibit title={"Your Public IPs are: "}>
>>>>>>> afe6c4b6b9c4397b3a3511e5c190feeaf488307b
        <div style={{display: "grid"}}>
          <DisplayIP type={IP_Types.IPV4}/>
          <DisplayIP type={IP_Types.IPV6}/>
          <PaylonLatency/>
        </div>
<<<<<<< HEAD
     
=======
      </Exhibit>
>>>>>>> afe6c4b6b9c4397b3a3511e5c190feeaf488307b
    </div>
  );
}

export default App;
