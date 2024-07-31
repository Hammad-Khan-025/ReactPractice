import './App.css';
import Birthday from './Components/01Birthday/Birthday';
import Tour from './Components/02Tours/Tour';
import Questions from './Components/03Questions/Questions';
import Menu from './Components/04Menu/Menu';
import Tabs from './Components/05Tabs/Tabs';
import SidebarModal from './Components/07Sidebar/SidebarModal';
import Reviews from './Components/10Reviews/Reviews';

function App() {
  return (
    <div >

      <Reviews/>
      <Birthday/>
      <Tour/>
      <Questions/>
      <Menu/>
      <SidebarModal/>
      <Tabs/>


    </div>
  );
}

export default App;
