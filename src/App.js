import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import SanJose from './components/SanJose.js';
import Wonder from './components/Wonder.js';
import Mission21 from './components/Mission21.js';
import TheManWhoWantsToKillMe from './components/TheManWhoWantsToKillMe.js';
import MyOnlyGirl from './components/MyOnlyGirl.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/san-jose' element={<SanJose />} />
      <Route path='/wonder' element={<Wonder />} />
      <Route path='/mission21' element={<Mission21 />} />
      <Route path='/the-man-who-wants-to-kill-me' element={<TheManWhoWantsToKillMe />} />
      <Route path='/my-only-girl' element={<MyOnlyGirl />} />
    </Routes>
  );
};

export default App;
