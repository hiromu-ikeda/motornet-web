import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { Error404 } from '../pages/Error404';
import { Login } from '../pages/Login';
import { Top } from '../pages/Top';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Top />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}
