import './App.css'
import ContactMe from './Pages/ContactMe/ContactMe'
import MainBody from './components/MainBody/MainBody'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Pages/About/About'
import { useEffect } from 'react'
import Lenis from "Lenis"
 
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <MainBody/>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/skills",
          element: <Skills/>
        },
        {
          path: "/projects",
          element: <Projects/>
        },
        {
          path: "/contactme",
          element: <ContactMe/>
        }
      ]
    },
  ]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time = any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
