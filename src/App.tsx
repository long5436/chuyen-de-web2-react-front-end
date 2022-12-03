import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import DefaultLayout from './Layouts/DefaultLayout';
import { Home, DetailMatch, DetailTopScore } from '~/pages';
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
              <Route path="/player/:id" element={<DetailTopScore />} />
            </Routes>
          </DefaultLayout>
        </StoreProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
