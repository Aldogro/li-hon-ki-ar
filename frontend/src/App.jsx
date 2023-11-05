import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import LoadingComponent from './components/LoadingComponent';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <MainLayout />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
