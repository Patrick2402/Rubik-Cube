import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css'
import '../src/styles/App.css'

import reportWebVitals from './reportWebVitals';
import Timer from './pages/Timer';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Playground from './pages/playground';

export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="timer" element={<Timer />} />
          <Route path="playground" element={<Playground />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);


reportWebVitals();
