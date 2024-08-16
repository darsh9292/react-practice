import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='app' element={<App />} />
    <Route path='user/' element={<User />}>
      <Route path=':userId' element={<User />} />
    </Route>
    <Route path='contact' element={<Contact />} />
    <Route path='about' element={<About />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
