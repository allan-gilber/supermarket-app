import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageHeader from '../../presentation/components/PageHeader';

import MyOrdersPage from '../../presentation/MyOrdersPage';

export default function Router() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route exact path='/' element={<MyOrdersPage />}/>
      </Routes>
    </BrowserRouter>
  );
}