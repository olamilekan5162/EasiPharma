import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Stocks from "./routes/Stocks/Stocks"
import Dashboard from "./routes/Dashboard/Dashboard"
import HomeLogin from "./routes/homeLogin/HomeLogin"

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
    ])
    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
