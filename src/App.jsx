import { Suspense, lazy } from 'react';
import './scss/style.scss';

import { Preloader } from './components/Preloader';

const Header = lazy(() => import('./components/Header'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contacts = lazy(() => import('./components/Contacts'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => (
  <Suspense fallback={<Preloader />}>
    <>
      <Header />
      <main className="page">
        <Portfolio />
        <Contacts />
      </main>
      <Footer />
    </>
  </Suspense>
);

export default App;
