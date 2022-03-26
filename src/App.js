import logo from './logo.svg';
import './App.css';
import Shope from './Components/Shope/Shope';
import Quesans from './Components/Question/Quesans';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Shope></Shope>
    <Quesans></Quesans>
    </div>
  );
}

export default App;
