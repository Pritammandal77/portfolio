import './App.css'
import About from './components/About/About'
import ContactMe from './components/ContactMe/ContactMe'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MainBody from './components/MainBody/MainBody'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

 
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
