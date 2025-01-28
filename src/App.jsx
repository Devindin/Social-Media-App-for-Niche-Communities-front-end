
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import SewingCommunity from "./Pages/SewingCommunity"
import CookingCommunity from "./Pages/CookingCommunity"

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="signin" element={<SignIn/>}></Route>
    <Route path="signup" element={<SignUp/>}></Route>
    <Route path="SewingCommunity" element={<SewingCommunity/>}></Route>
    <Route path="cookingCommunity" element={<CookingCommunity/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
