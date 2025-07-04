import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import ThemeToggle from './Components/ThemeToggle';

function App() {
 

  return (
    <>
      <BrowserRouter>

        <ThemeToggle />
        <Routes>

          <Route index element={ <Home />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </>
  )
   
}
export default App
