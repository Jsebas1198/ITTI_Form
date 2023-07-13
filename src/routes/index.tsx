import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom';

const FormWrapper = React.lazy(() => import('../components/FormWrapper'));
const MainPage = React.lazy(() => import('../components/MainPage'));

export default function Routes(): JSX.Element {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <ReactRoutes>
            <Route path="/" element={<MainPage />} />
              <Route path="form" element={<FormWrapper />} />
          </ReactRoutes>
        </BrowserRouter>
      </React.Suspense>
    );
  }
  