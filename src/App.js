import './App.css'
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';

function App() {

  return (
    <HashRouter>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Todo">Todo List</Link>
          </li>
          <li>
            <Link to="/Calendar">Calendar</Link>
          </li>
        </ul>
      </header>
      
      <Routes>
        <Route exact path="/" element={< Home />} ></Route>
        <Route path="/Todo" element={<Todo />} ></Route>
        {/* <Route path="/Calendar" element={<Calendar />} ></Route> */}
      </Routes>

    </HashRouter>
  );
}

export default App;
