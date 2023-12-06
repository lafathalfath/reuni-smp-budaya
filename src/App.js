import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Panitia from './pages/Panitia';
import Games from './pages/Games';
import Makanan from './pages/Makanan';
import Rundown from './pages/Rundown';
import Layout from './pages/Layout';
import NoPages from './pages/NoPages';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/panitia' element={<Panitia/>}/>
              <Route path='/games' element={<Games/>}/>
              <Route path='/makanan' element={<Makanan/>}/>
              <Route path='/rundown' element={<Rundown/>}/>
              <Route path='*' element={<NoPages/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
