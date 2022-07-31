import { useContext } from "react"
import { AuthContext, AuthInfoContext } from "../context/AuthContext"

export const Profile = () => {
  const isLoggedIn = useContext(AuthContext);
  const [authInfo, setAuthInfo] = useContext(AuthInfoContext);
  return (
    <>
      Profile画面です
    </>
  )
}
