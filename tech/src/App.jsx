import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import './app.css'
import Footer from "./components/Footer"



function App() {
 
  return (
    <>
   
     <div className="app-cont">
      <Navbar/>
      <MainContent/>
      <Footer/>
     </div>
  
    </>
  )
}

export default App
