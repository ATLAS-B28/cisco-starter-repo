
import './App.css';
import Banner from './Banner';
import Card from './Card';
import Display from "./GetIP"
function App(props) {
  return (
    <div className="App">
      <Banner head="Banner"/>
      <Card name="Public IPv4 Address">
        <Display url="https://api.ipify.org?format=json"/>
      </Card>
      <Card name="Public IPv6 Address">
        <Display url="https://api.ipify.org?format=json"/>
      </Card>

    </div>
  );
}

export default App;
