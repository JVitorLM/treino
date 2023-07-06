import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Carregando = lazy(() => import('./components/Carregando'));
const Header = lazy(() => import('./components/Header'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Treinos = lazy(() => import('./pages/Treinos'));
const Rodape = lazy(() => import('./components/Rodape'));


export default function Rotas() {

  return (
    <Router>
      <Suspense fallback={<Carregando />}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/treinos' element={<Treinos />} />
        </Routes>
        <Rodape />
      </Suspense>
    </Router>
  );
}