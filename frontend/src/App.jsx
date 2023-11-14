import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import LoadingComponent from './components/LoadingComponent';
import StickyHeader from './components/StickyHeader'

function App() {
  return (
    <BrowserRouter>
      <StickyHeader />
      <Suspense fallback={<LoadingComponent />}>
        <MainLayout />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
