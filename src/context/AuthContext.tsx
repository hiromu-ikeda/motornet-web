import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export const AuthContext = createContext(false);

type AuthInfoType = {
  userId: string;
  email: string;
}

export const AuthInfoContext = createContext
                              <[AuthInfoType, Dispatch<SetStateAction<AuthInfoType>>]>
                              ([{userId: "", email: ""}, () => {}]);

export const AuthContextProvider: React.FC<any> = (props) => {
  const [ loggedin, setLoggedin ] = useState(false);
  const [ authInfo, setAuthInfo ] = useState(getDefaultAuthInfo);

  useEffect(() => {
    if (authInfo.userId && authInfo.email) {
      setAuthInfoToLocalStorage(authInfo);
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, [authInfo]);
  return (
    <AuthContext.Provider value={loggedin}>
      <AuthInfoContext.Provider value={[authInfo, setAuthInfo]}>
        {props.children}
      </AuthInfoContext.Provider>
    </AuthContext.Provider>
  )
}

const getDefaultAuthInfo = () => {
  const defaultAuthInfo = window.localStorage.getItem("authInfo");
  const nullInfo = {userId: "", email: ""};
  const response = defaultAuthInfo && JSON.parse(defaultAuthInfo);
  return response || nullInfo;
}

const setAuthInfoToLocalStorage = (authInfo: AuthInfoType) => {
  const AuthInfoToString = JSON.stringify(authInfo);
  window.localStorage.setItem("authInfo",AuthInfoToString);
}
