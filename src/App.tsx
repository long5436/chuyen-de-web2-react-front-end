import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import DefaultLayout from './Layouts/DefaultLayout';
import { Home, DetailMatch } from '~/pages';
import { StoreProvider } from '~/reducers';

function App() {
  const helmetContext = {};

  return (
    <Router>
      <HelmetProvider context={helmetContext}>
        <StoreProvider>
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<DetailMatch />} />
            </Routes>
          </DefaultLayout>
        </StoreProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
