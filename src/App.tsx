import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout';
import { Home, DetailMatch } from '~/pages';

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailMatch />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
