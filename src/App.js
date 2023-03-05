import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/home.component';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} />
            <Route path="/add-products" element={<AddProducts />} />  */}
        </Route>
    </Routes>
  )
}

export default App