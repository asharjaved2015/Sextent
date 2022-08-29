import './App.css';
import Banner from './components/banner/banner.component.jsx'
import Exhibit from './components/exhibit/exhibit.component';

function App() {
  return (
    <div className="App">
      <Banner title={"Site Title"}/>
      <Exhibit title={"Exhibit Title"}>
        <div style={{display: "grid"}}>
          <span>This is a test</span>
          <span>This is a test</span>
          <span>This is a test</span>
          <span>This is a test</span>
        </div>
      </Exhibit>
    </div>
  );
}

export default App;
