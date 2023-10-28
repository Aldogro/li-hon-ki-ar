import { createBrowserRouter, RouterProvider as Router } from 'react-router-dom';
import UnderConstruction from './components/UnderConstruction';
import MainPage from './pages/MainPage';
import MainLayout from './MainLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UnderConstruction />,
    },
    {
      path: 'page',
      element: <MainPage />,
    },
  ]);

  return (
    <MainLayout>
      <Router router={router} />
    </MainLayout>
  );
}

export default App;
