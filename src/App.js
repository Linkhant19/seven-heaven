import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import SanJose from './components/SanJose.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/san-jose' element={<SanJose />} />
    </Routes>
  );
}

export default App;
