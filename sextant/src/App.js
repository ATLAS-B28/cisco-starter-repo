
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1 className='Banner'>Sextant Banner</h1>
      <div className='Cards'>
        <div>Card Title</div>
        <div className='card-1'>{props.children}</div>
      </div>
    </div>
  );
}

export default App;
