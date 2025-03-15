import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomeLogin from "./routes/homeLogin/HomeLogin"
import Homepage from "./routes/homepage/Homepage"
import Dashboard from "./components/ui/dashboard/Dashboard"
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
      path: "homepage",
      element: <Homepage />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: "dashboard",
          element: <Dashboard />
        },
        {
          path: "distribution",
          element: <Distribution />
        },
        {
          path: "stafflist",
          element: <StaffList />
        },
        {
          path: "stocks",
          element: <Stocks />
        },
        {
          path: "suppliers",
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
