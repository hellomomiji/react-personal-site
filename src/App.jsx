import { useState } from 'react';

import './static/css/App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="app">
        <a className="skip-link" href="#main">Skip to content</a>
      <Header setPage={setPage} />
      <Main setPage={setPage} page={page} />
      <Footer />
    </div>
  );
}

export default App;
