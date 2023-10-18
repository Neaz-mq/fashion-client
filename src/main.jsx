import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProductDetails from './components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/product',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/fashion/:id',
        element: (
          
            <ProductDetails></ProductDetails> 
          
        ),
        loader: () => fetch('http://localhost:5000/product')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
