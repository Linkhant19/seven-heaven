import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import SanJose from './components/SanJose.js';
import Wonder from './components/Wonder.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/san-jose' element={<SanJose />} />
      <Route path='/wonder' element={<Wonder />} />
    </Routes>
  );
}

export default App;
