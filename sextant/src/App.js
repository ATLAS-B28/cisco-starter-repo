
import './App.css';
import Banner from './Banner';
import Card from './Card';
function App(props) {
  return (
    <div className="App">
      <Banner head="Banner"/>
      <Card head="Card-1" />
      <Card head="Card-2" />
      <Card head="Card-3" />
    </div>
  );
}

export default App;
