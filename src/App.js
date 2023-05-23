
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Edit from './Pages/Edit/Edit';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Pagenotfound from './Pages/Pagenotfound/Pagenotfound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';




function App() {
  return (
   <>
    <Header/>

   <Routes>
   <Route path="/" element={<Home/>} />

   <Route path="/edit/:id" element={<Edit/>} />

   <Route path="/profile/:id" element={<Profile/>} />

   <Route path="/register" element={<Register/>} />

   <Route path="*" element={<Pagenotfound/>} />
   </Routes>

   
   
   </>
  );
}

export default App;
