import "./style.scss"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import Name from './pages/Name';
import Home from './pages/Home';
import Message from './pages/Message';


function App() {
  return (
    <Router>
       <div className="App">
      <div className="container">
      <Routes>
      <Route path="/" element={<Name/>}/>
      <Route path="/message" element={<Message/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
