
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Profile from "./Pages/Profile"
import SewingCommunity from "./Pages/SewingCommunity"
import CookingCommunity from "./Pages/CookingCommunity"
import GardningCommunity from "./Pages/GardningCommunity"
import PaintingCommunity from "./Pages/PaintingCommunity"
import PaperQuillingCommunity from "./Pages/PaperQuillingCommunity"
import ReadingCommunity from "./Pages/ReadingCommunity"

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="signin" element={<SignIn/>}></Route>
    <Route path="signup" element={<SignUp/>}></Route>
    <Route path="SewingCommunity" element={<SewingCommunity/>}></Route>
    <Route path="cookingCommunity" element={<CookingCommunity/>}></Route>
    <Route path="gardningcommunity" element={<GardningCommunity/>}></Route>
    <Route path="paintingcommunity" element={<PaintingCommunity/>}></Route>
    <Route path="paperquillingcommunity" element={<PaperQuillingCommunity/>}></Route>
    <Route path="readingcommunity" element={<ReadingCommunity/>}></Route>
    <Route path="profile" element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
