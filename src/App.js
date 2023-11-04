
import './App.css';
import CardsPage from './Components/Pages/CardsPage/CardsPage';
import StartPage from './Components/Pages/StartPage/StartPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { UserProvider } from './useContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<StartPage/>} />
          <Route path="/game" exact element={<CardsPage/>} />
       </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
