import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Homepage } from './pages/Homepage';
import { Coinpage } from './pages/Coinpage';
import { Latestnews } from './components/Latestnews';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-slate-950 h-screen'>
        <Header/>
        <Routes>
          <Route path='/' Component={Homepage} exact />
          <Route path='/coins/:id' Component={Coinpage} exact />
        </Routes>
        <Latestnews/>
      </div>
    </BrowserRouter>
  );
}

export default App;
