import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { UserProvider } from './utils/UserAuthContext';
import HomeLogin from "./routes/homeLogin/HomeLogin"
import Homepage from "./routes/homepage/Homepage"
import Dashboard from "./components/ui/dashboard/Dashboard"
import Distribution from "./components/ui/distribution/Distribution"
import StaffList from "./components/ui/staffList/StaffList"
import Stocks from "./components/ui/stocks/Stocks"
import Suppliers from "./components/ui/suppliers/Suppliers"
import Inventory from "./components/ui/inventory/Inventory"
import OrderStock from "./components/ui/orderStock/OrderStock"

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
          path: "suppliers",
          element: <Suppliers />
        },
        {
          path: "stocks",
          element: <Stocks />,
          children: [
            {
              index: true,
              element: <Inventory />
            },
            {
              path: "inventory",
              element: <Inventory />
            },
            {
              path: "orderstock",
              element: <OrderStock />
            }
            ]
        }
        ]
    },
    ])
    
  return (
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
  )
}

export default App
