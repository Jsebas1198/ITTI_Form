import * as React from 'react';
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';

const FormWrapper = React.lazy(() => import('../pages/FormWrapperPage'));
const MainPage = React.lazy(() => import('../pages/MainPage'));
const SearchToModify = React.lazy(() => import('../pages/SearchToModify'));
const SearchToDelete = React.lazy(() => import('../pages/SearchToDelete'));

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
          <Route path="buscar" element={<SearchToModify />} />
          <Route path="eliminar" element={<SearchToDelete />} />
        </ReactRoutes>
      </BrowserRouter>
    </React.Suspense>
  );
}
