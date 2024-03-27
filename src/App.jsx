import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
