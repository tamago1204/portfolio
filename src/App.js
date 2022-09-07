import './App.css';
import Blogpage from './components/Blogpage';
import Header from './components/Header';
import Homepage from './components/Homepage';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
function App() {
  return (
    <Router>    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/blog' element = {<Blogpage/>}/>
      
      </Routes>
      </div>
    </Router>

  );
}

export default App;

