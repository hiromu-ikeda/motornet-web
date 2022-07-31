import { Routes, Route } from 'react-router-dom';
import { NonSidebarLayout } from '../components/templates/NonSidebarLayout';
import { NonFooterLayout } from '../components/templates/NonFooterLayout';
import { Articles } from '../pages/Articles';
import { Error404 } from '../pages/Error404';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Top } from '../pages/Top';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { AuthContextProvider } from '../context/AuthContext';
import { Profile } from '../pages/Profile';
import { AuthenticatedGuard } from '../auth/AutheticatedGuard';
import { Hoge } from '../pages/Hoge';

export const Router = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<NonSidebarLayout />}>
            <Route index element={<Top />} />
          </Route>
          <Route path="/" element={<NonFooterLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="hoge" element={<Hoge />} />
          </Route>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="articles" element={<Articles />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Routes>
          <Route path="/" element={<NonFooterLayout />}>
              <Route path="profile" element={<AuthenticatedGuard><Profile /></AuthenticatedGuard>} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  )
}
