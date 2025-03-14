import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Dashboard from "./routes/Dashboard/Dashboard"
import HomeLogin from "./routes/homeLogin/HomeLogin"
import Home from "./components/ui/home/Home"
import Distribution from "./components/ui/distribution/Distribution"
import StaffList from "./components/ui/staffList/StaffList"
import Stocks from "./components/ui/stocks/Stocks"
import Suppliers from "./components/ui/suppliers/Suppliers"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLogin />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "home"
          element: <Home />
        },
        {
          path: "distribution"
          element: <Distribution />
        },
        {
          path: "stafflist"
          element: <StaffList />
        },
        {
          path: "stocks"
          element: <Stocks />
        },
        {
          path: "suppliers"
          element: <Suppliers />
        }
        ]
    },
    ])
    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
