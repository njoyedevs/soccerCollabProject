import { Route, Routes } from 'react-router-dom';
import Team from './views/aboutDevelopers.js';
import Home from './components/Home.js';
import { NotFound } from './views/NotFound.js';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/team' element={<Team/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

