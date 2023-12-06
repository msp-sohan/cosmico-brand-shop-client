import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
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
import DashboardLayout from "../../layout/DashboardLayout";
import DashboardHome from "../../pages/Dashboard/DashboardHome/DashboardHome";
import ManageProducts from "../../pages/Dashboard/Admin/ManageProducts";
import ManageUsers from "../../pages/Dashboard/Admin/ManageUsers";
import Contact from "../../pages/Contact/Contact";
import AboutUs from "../../pages/AboutUs/AboutUs";

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
            path: "about",
            element: <AboutUs />
         },
         {
            path: "contact",
            element: <Contact />
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
            loader: () => fetch(`https://cosmico-brand-shop-server.vercel.app/products`)
         },
         {
            path: "/products/:brand/:id",
            element: <PrivetRouter><ProductDetails></ProductDetails></PrivetRouter>,
            loader: () => fetch(`https://cosmico-brand-shop-server.vercel.app/products`)
         },
         {
            path: "/update/:id",
            element: <PrivetRouter><UpdateProduct></UpdateProduct></PrivetRouter>,
         },
         {
            path: "/mycart",
            element: <PrivetRouter><MyCart></MyCart></PrivetRouter>,
         }
      ]
   },
   {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
         {
            index: true,
            element: <DashboardHome />
         },
         {
            path: "manage-product",
            element: <ManageProducts />,
         },
         {
            path: "add-product",
            element: <PrivetRouter><AddProduct></AddProduct></PrivetRouter>
         },
         {
            path: "manage-user",
            element: <ManageUsers />
         },
      ]
   }
])

export default router;