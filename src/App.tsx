import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ProductsAutomation = lazy(() => import('./pages/ProductsAutomation'));
const Contracting = lazy(() => import('./pages/Contracting'));
const Industries = lazy(() => import('./pages/Industries'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-automation" element={<ProductsAutomation />} />
          <Route path="/contracting" element={<Contracting />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
