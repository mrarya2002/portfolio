import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {

  return (
    <>
      <Navbar/>
    <Sidebar/>
    <Outlet/>
    </>
  )
}

export default App
