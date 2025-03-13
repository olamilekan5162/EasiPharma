import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Inventory from "../src/routes/inventory/Inventory"
import AdminBoard from "../src/routes/adminBoard/AdminBoard"
import HomeLogin from "../src/routes/homeLogin/HomeLogin"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLogin />,
    },
    {
      path: "dashboard/:role",
      element: <AdminBoard />
    },
    {
      path: "inventory",
      element: <Inventory />
    }
    ])
    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
