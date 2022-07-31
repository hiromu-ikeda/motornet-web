import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"

export const AuthenticatedGuard = (props: any) => {
  const isLoggedIn = useContext(AuthContext);
  const location = useLocation();
  const { children } = props;

  return isLoggedIn ? <>{ children }</> : <Navigate to={"/login"} state={{from: location}} />
}
