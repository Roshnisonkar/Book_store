import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Component/Navabr/Navbar';
import Home from './Component/Pages/Home';
import Books from './Component/Pages/Books';
import AddBooks from './Component/Pages/AddBooks';
import Footer from './Component/Footer/Footer';
import Updatebook from './Component/Updatebook/Updatebook';

function App() {
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/books' element={<Books/>}></Route>
      <Route path='/addBooks' element={<AddBooks/>}></Route>
      <Route path='/updatebook/:_id' element={<Updatebook/>}></Route>
    </Routes>
    <Footer/>
   
    </>
  );
}

export default App;
