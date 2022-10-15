import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { DefaultLayout } from './Layouts';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const Element = route.component;

          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
