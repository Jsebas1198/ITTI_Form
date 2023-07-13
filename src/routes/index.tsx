import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom';

const FormPage = React.lazy(() => import('../components/common/Form'));
const MainPage = React.lazy(() => import('../components/MainPage'));

export default function Routes(): JSX.Element {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <ReactRoutes>
            <Route path="/" element={<MainPage />} />
              <Route path="form" element={<FormPage />} />
          </ReactRoutes>
        </BrowserRouter>
      </React.Suspense>
    );
  }
  