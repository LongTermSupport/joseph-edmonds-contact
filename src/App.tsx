import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ROUTES } from './routes';
import { useBodyLoaded } from './hooks/useBodyLoaded';

/**
 * Application routes, router-agnostic: wrapped in BrowserRouter on the client
 * and StaticRouter during the SSG prerender.
 */
export function AppContent() {
  useBodyLoaded();

  return (
    <Routes>
      <Route path={ROUTES.home.path} element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
