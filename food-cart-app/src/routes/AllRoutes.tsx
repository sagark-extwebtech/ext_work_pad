import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landingPage/LandingPage"

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes