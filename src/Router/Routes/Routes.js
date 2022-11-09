import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('services.json')
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])

  export default router;