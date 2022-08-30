import './App.css';
import Banner from './components/banner/banner.component.jsx'
import DisplayIP, { IP_Types } from './components/display-ip/display-ip.component';
import Exhibit from './components/exhibit/exhibit.component';

function App() {
  return (
    <div className="App">
      <Banner title={"Sextent"}/>
      <Exhibit title={"Your Public IPs are: "}>
        <div style={{display: "grid"}}>
          <DisplayIP type={IP_Types.IPV4}/>
          <DisplayIP type={IP_Types.IPV6}/>
        </div>
      </Exhibit>
    </div>
  );
}

export default App;
