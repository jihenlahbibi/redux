
import './App.css';
import AddTask from './component/AddTask';

import FiltreTask from './component/FiltreTask';
import ListTask from './component/ListTask';
import Task from './component/Task';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div >
    <ListTask/>
  <FiltreTask/>
  <AddTask/>
    </div>
  );
}

export default App;

