import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout';
import { Home, DetailMatch } from '~/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/detail"
          element={
            <DefaultLayout>
              <DetailMatch />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
