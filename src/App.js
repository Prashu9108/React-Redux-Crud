import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Create from './components/create/Create';
import Pnf from './components/pnf/Pnf';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ToastContainer autoClose={3000} position={"top-right"}/>
      <Routes>
        <Route path={``} element={<Home/>}/>
        <Route path={`/home`} element={<Home/>}/>
        <Route path={`/create`} element={<Create/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;