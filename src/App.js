import logo from './logo.svg';
import './App.css';
import Login from './componenets/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componenets/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
