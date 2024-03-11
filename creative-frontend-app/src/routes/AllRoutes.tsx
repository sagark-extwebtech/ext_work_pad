import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landingPage/LandingPage"


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="" element={<LandingPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes