import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageHeader from '../../presentation/components/PageHeader';

import Home from '../../presentation/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageHeader/>}>
          <Route exact path="/" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}