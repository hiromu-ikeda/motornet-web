import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Footer } from "../organisms/Footer"
import { Header } from "../organisms/Header"
import { Sidebar } from "../organisms/Sidebar"

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Smain>
        <Sidebar />
        <SOutlet>
          <Outlet />
        </SOutlet>
      </Smain>
      <Footer />
    </>
  )
}

const Smain = styled.main`
  display: grid;
  grid-template-columns: 3.125% 21% 3.125% 1fr 3.125%;
`

const SOutlet = styled.div`
  grid-column: 4;
`
