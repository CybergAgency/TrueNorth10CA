import { BrowserRouter, useLocation } from 'react-router-dom';
// import './index.css';
import Routing from './Routing';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <HelmetProvider>
        <ScrollToHashElement />
        <Routing />
        </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
