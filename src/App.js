import './App.css';

import DisplayIP, { IP_Types } from './components/display-ip/display-ip.component.jsx';

function App() {
  return (
    <div className="App">
      <p>hey</p>
        <div>
          <DisplayIP type={IP_Types.IPV4}/>
          <DisplayIP type={IP_Types.IPV6}/>
        </div>
   
    </div>
  );
}

export default App;