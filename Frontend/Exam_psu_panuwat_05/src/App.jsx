import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Classroom from './page/Classroom'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/assets" element={<Classroom />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;