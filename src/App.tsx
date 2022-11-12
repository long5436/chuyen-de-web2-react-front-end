import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout';
import { Home } from '~/pages';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
