import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Case1 from './pages/Case1';
import Case2 from './pages/Case2';
import Case3 from './pages/Case3';
import Case4 from './pages/Case4';
import NotFound from './pages/NotFound';
import { LEGACY_ROUTES, ROUTES } from './content/site';
import './styles/global.css';
import './styles/bw.css';
import './styles/case.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.case1} element={<Case1 />} />
          <Route path={ROUTES.case2} element={<Case2 />} />
          <Route path={ROUTES.case3} element={<Case3 />} />
          <Route path={ROUTES.case4} element={<Case4 />} />
          {LEGACY_ROUTES.map(([from, to]) => <Route key={from} path={from} element={<Navigate to={to} replace />} />)}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
