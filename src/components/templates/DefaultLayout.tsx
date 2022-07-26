import { Outlet } from "react-router-dom"
import { Footer } from "../organisms/Footer"
import { Header } from "../organisms/Header"

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
