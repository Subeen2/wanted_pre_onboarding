import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Input from './components/Input';
import Dropdown from './components/Dropdown';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle />
        <Tab />
        <Dropdown />
        <Input />
      </header>
    </div>
  );
}

export default App;
