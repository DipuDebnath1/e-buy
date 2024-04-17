import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

 

function App() {
 
  return (
    <>
     <header className="sticky top-0 border-b-2 z-50">
      <Navbar />
     </header>
     
     <main>
      <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default App
