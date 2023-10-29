import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <MainLayout />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
