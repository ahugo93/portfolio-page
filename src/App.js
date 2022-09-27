import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import HomePage from './components/Home';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <h1>Welcome to the wonderful world of HuCode</h1>
      <HomePage/>
    </div>
  );
}

export default App;
