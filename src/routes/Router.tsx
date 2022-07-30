import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { Articles } from '../pages/Articles';
import { Error404 } from '../pages/Error404';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Top } from '../pages/Top';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Top />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="articles" element={<Articles />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}
