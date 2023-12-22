
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes,  BrowserRouter } from 'react-router-dom';

const app = () => {
  const pagesize=6;
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = 'f131505f4a1e414e8258ef817db2abe5';
 
    return (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key='GENERAL' pagesize={pagesize}  apiKey={apiKey}  country='in' category='GENERAL' />} />
          <Route path='/BUSINESS' element={<News key='BUSINESS' pagesize={pagesize}  apiKey={apiKey}  country='in' category='BUSINESS' />} />
          <Route path='/ENTERTAINMENT' element={<News key='ENTERTAINMENT' pagesize={pagesize}  apiKey={apiKey}  country='in' category='ENTERTAINMENT' />} />
          <Route path='/GENERAL' element={<News key='GENERAL'pagesize={pagesize}  apiKey={apiKey}  country='in' category='GENERAL' />} />
          <Route path='/HEALTH' element={<News key='HEALTH' pagesize={pagesize}  apiKey={apiKey}  country='in' category='HEALTH' />} />
          <Route path='/SCIENCE' element={<News key='SCIENCE' pagesize={pagesize}  apiKey={apiKey}  country='in' category='SCIENCE' />} />
          <Route path='/SPORTS' element={<News key='SPORTS'pagesize={pagesize}  apiKey={apiKey}  country='in' category='SPORTS' />} />
          <Route path='/TECHNOLOGY' element={<News key='TECHNOLOGY'pagesize={pagesize}  apiKey={apiKey}  country='in' category='TECHNOLOGY' />} />
        </Routes>
        </BrowserRouter>
      </>
    );
   
}

export default app;


