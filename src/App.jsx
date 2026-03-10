import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";

const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,   // ✅ This replaces path: ""
        element: <Home />
      },
      {
        path: "products",
        element: <ProductsList />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "contact",
        element: <ContactUs />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={routerObj} />;
}