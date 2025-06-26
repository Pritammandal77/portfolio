import './App.css'
import ContactMe from './Pages/ContactMe/ContactMe'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import MainBody from './components/MainBody/MainBody'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './Pages/About/About'

 
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


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
