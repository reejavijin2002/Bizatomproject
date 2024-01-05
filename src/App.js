import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Sales from './components/sales/Sales';

function App() {
    return ( <> 

    {/* <Login/> */}
    {/* <Sales/> */}
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sales' element={<Sales/>}/>


    </Routes>
    </BrowserRouter>
    
    </> 


    );
}

export default App;