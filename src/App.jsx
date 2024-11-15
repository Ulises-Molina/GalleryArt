import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Work } from "./pages/Work"
import { ArtProvider } from "./context/ArtProvider"

export const App = () => {


  return (
    <ArtProvider>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Home/>} />
      <Route path='work/:id' element={<Work/>} />
    </Routes>
    </ArtProvider>
  )
}

