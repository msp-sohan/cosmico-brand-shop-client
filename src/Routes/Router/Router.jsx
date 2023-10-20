import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import AddProduct from "../../pages/AddProduct/AddProduct";
import BrandProduct from "../../pages/BrandProduct/BrandProduct";
import ProductDetails from "../../pages/BrandProduct/ProductDetails";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyCart from "../../pages/MyCart/MyCart";
import Register from "../../pages/Register/Register";
import UpdateProduct from "../../pages/UpdateProduct/UpdateProduct";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/login",
            element: <Login></Login>
         },
         {
            path: "/register",
            element: <Register></Register>
         },
         {
            path: "/addproduct",
            element: <PrivetRouter><AddProduct></AddProduct></PrivetRouter>
         },
         {
            path: "/products/:brand",
            element: <BrandProduct></BrandProduct>,
            loader: () => fetch(`https://cosmico-brand-shop-server-r36j3c39y-sohan-perves-projects.vercel.app/products`)
         },
         {
            path: "/products/:brand/:id",
            element: <PrivetRouter><ProductDetails></ProductDetails></PrivetRouter>,
            loader: () => fetch(`https://cosmico-brand-shop-server-r36j3c39y-sohan-perves-projects.vercel.app`)
         },
         {
            path: "/update/:id",
            element: <PrivetRouter><UpdateProduct></UpdateProduct></PrivetRouter>,
            loader: ({ params }) => fetch(`https://cosmico-brand-shop-server-r36j3c39y-sohan-perves-projects.vercel.app/${params.id}`)
         },
         {
            path: "/mycart",
            element: <PrivetRouter><MyCart></MyCart></PrivetRouter>,
            loader: () => fetch('https://cosmico-brand-shop-server-r36j3c39y-sohan-perves-projects.vercel.app/mycart')
         }
      ]
   }
])

export default router;