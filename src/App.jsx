import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

 

function App() {
 
  return (
    <>
     <header className="sticky top-0 border-b-2">
      <Navbar />
     </header>
     
     <main>
      <Outlet />
     </main>
    </>
  )
}

export default App
