import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import { Projects,Home,Games} from './components/index.js'
import Projects from './components/Projects.jsx'
import Home from './components/Home.jsx'
import Games from './components/Games.jsx'
import Cheatsheat from './components/Cheatsheat.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path=''element={<Home/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/games' element={<Games/>} />
    <Route path='/cheatsheats' element={<Cheatsheat/>} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
