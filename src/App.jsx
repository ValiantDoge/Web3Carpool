import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import Dreiver from "./components/Dreiver"
import Passenger from "./components/Passenger"
import PublishRide from "./components/PublishRide"
import Navbar from "./components/Navbar"

function App() {

  const Layout = () => {
    return (
      <div className=" md:w-9/12 mx-auto "> 
      <Navbar/>
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement:<Error/>,
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <SignIn />
        },
        {
          path: '/register',
          element: <SignUp />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/logout',
          element: <SignIn />
        },
        {
          path:'/dreiver',
          element:<Dreiver/>
        },
        {
          path:'/passenger',
          element:<Passenger/>
        },
        {
          path:'/publishride',
          element:<PublishRide/>
        }
  
      ]
    }
  ])

  return (
    <>
        <RouterProvider router={router} >
        </RouterProvider>
    </>
  )
}

export default App
