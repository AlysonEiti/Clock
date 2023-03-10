import './App.css';
import Clock from './Components/Clock';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Clock</h1>
      <Clock />
      <div className='digital'>--:--:--</div>
      <Footer />
    </div>
  );
}

export default App;
