import * as React from 'react';
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';

const FormWrapper = React.lazy(() => import('../pages/FormWrapperPage'));
const MainPage = React.lazy(() => import('../pages/MainPage'));

export default function Routes(): JSX.Element {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<MainPage />} />
          <Route path="form">
            <Route path="crear" element={<FormWrapper />} />
            <Route path="editar/:id" element={<FormWrapper />} />
          </Route>
        </ReactRoutes>
      </BrowserRouter>
    </React.Suspense>
  );
}
