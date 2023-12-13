import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProduct from "../pages/BrandProduct/BrandProduct";
import ProductDetails from "../pages/BrandProduct/ProductDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCart from "../pages/MyCart/MyCart";
import Register from "../pages/Register/Register";
import PrivetRouter from "./PrivetRouter";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import ManageProducts from "../pages/Dashboard/Admin/ManageProducts";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import ShoppingCart from "../pages/Dashboard/User/ShoppingCart";
import UpdateProducts from "../pages/Dashboard/Admin/UpdateProducts";

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
         },
         {
            path: "/products/:brand/:id",
            element: <PrivetRouter><ProductDetails></ProductDetails></PrivetRouter>,
         },
         {
            path: "/mycart",
            element: <PrivetRouter><MyCart></MyCart></PrivetRouter>,
         }
      ]
   },
   {
      path: "/dashboard",
      element: <PrivetRouter><DashboardLayout /></PrivetRouter>,
      children: [
         {
            index: true,
            element: <PrivetRouter><DashboardHome /></PrivetRouter>
         },
         // Admin
         {
            path: "manage-product",
            element: <PrivetRouter><ManageProducts /></PrivetRouter>,
         },
         {
            path: "update/:id",
            element: <PrivetRouter><UpdateProducts></UpdateProducts></PrivetRouter>,
         },
         {
            path: "add-product",
            element: <PrivetRouter><AddProduct></AddProduct></PrivetRouter>
         },
         {
            path: "manage-user",
            element: <PrivetRouter><ManageUsers /></PrivetRouter>
         },
         // User
         {
            path: "shopping-cart",
            element: <PrivetRouter><ShoppingCart /></PrivetRouter>
         }
      ]
   }
])

export default router;