import { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import LoadingComponent from './components/LoadingComponent';
import StickyHeader from './components/StickyHeader'
import ErrorMessage from './ErrorMessage';

function App() {
  return (
    <BrowserRouter>
      <StickyHeader />
      <ErrorBoundary fallbackRender={ErrorMessage}>
        <Suspense fallback={<LoadingComponent />}>
          <MainLayout />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
