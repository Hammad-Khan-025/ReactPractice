import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Birthday from './Components/01Birthday/Birthday';
import Tours from './Components/02Tours/Tours';
import Questions from './Components/03Questions/Questions';
import Menu from './Components/04Menu/Menu';
import Tabs from './Components/05Tabs/Tabs';
import Navbar from './Components/06Navbar/Navbar';
import PassGen from './Components/08PasswordGenerator/PassGen';
import SidebarModal from './Components/07Sidebar/SidebarModal';
import Main from './Components/09UseContextHook/Main';
import Loginn from './Components/09UseContextHook/Loginn';
import UserContextState from './Components/09UseContextHook/UserContextState';

function App() {
  return (
    <div >
      {/* <Navbar/>
      <SidebarModal/>
      <Birthday/>
      <Tours/>
      <Questions/>
      <Tabs/>
      <Menu/>
      <PassGen/> */}
      
      
      <UserContextState>
        <Router>
          <Routes>
            <Route path="/" element={<Loginn/>} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </UserContextState>

    </div>
  );
}

export default App;
