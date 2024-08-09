import { useState } from 'react'
import carLogo from '../public/car-sharing.png'
import './App.css'

function App() {


  const Layout = () => {
    return (
      <div className=" md:w-9/12 mx-auto "> 
        {/* thsi is outlet  */}
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
      <div>
        <a href="#" target="_blank">
          <img src={carLogo} className="logo" alt="Car logo" />
        </a>
        
      </div>
      <h1>Carpooling application on the Blockchain</h1>
      <div className="card">
        <h1 className="text-3xl font-bold underline text-red-700">
          Hello world!
        </h1>
       
      </div>
     
    </>
  )
}

export default App
