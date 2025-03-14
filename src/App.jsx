import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Stocks from "./routes/Stocks/Stocks"
import Dashboard from "./routes/Dashboard/Dashboard"
import HomeLogin from "../src/routes/homeLogin/HomeLogin"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLogin />,
    },
    {
      path: "dashboard",
      element: <Dashboard />
    },
    {
      path: "stocks",
      element: <Stocks />
    }
    ])
    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
