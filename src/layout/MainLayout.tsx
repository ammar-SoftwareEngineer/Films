// Pages
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
// Context Api
import { DataProvider } from "@hooks/context/FilmsContext"
// React Router Dom
import { Outlet } from "react-router-dom"
// Styles
import "@styles/globle.css"
function MainLayout() {
  return (
    <div className="layer  flex justify-between flex-col" >
      <DataProvider>
        <Header />
        <div className="container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </DataProvider>
    </div>
  )
}

export default MainLayout
