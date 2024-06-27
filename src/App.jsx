import './scss/style.scss';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <main className="page">
      <Portfolio />
      <Contacts />
    </main>
    <Footer />
  </>
);

export default App;
