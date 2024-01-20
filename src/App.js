import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./normalize.css";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import DmList from './components/pages/Dm/DmList';
import Profile from './components/pages/profile/Profile';
import DirMes from './components/pages/Dm/DirMes/DirMes';
import Friends from './components/friends/Friends';
import Login from './components/login/Login';
import Calls from './components/calls/Calls';
import { createContext, useState } from 'react';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({})


  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <div className='container flex'>
          <Menu />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dm" element={<DmList />} />
            <Route path="/dm/:id" element={<DirMes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calls" element={<Calls />} />
          </Routes>
        </div>
        <Footer />

      </div>
    </userContext.Provider>
  );
}

export default App;
