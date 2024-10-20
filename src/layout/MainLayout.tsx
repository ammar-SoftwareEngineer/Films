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
    <div className="layer flex flex-col justify-between min-h-screen" >
      <DataProvider>
        <Header />
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
        <Footer />
      </DataProvider>
    </div>
  )
}

export default MainLayout
