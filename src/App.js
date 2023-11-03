
import './App.css';
import CardsPage from './Components/Pages/CardsPage/CardsPage';
import StartPage from './Components/Pages/StartPage/StartPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<StartPage/>} />
          <Route path="/game" exact element={<CardsPage/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
