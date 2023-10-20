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
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './Hook/AuthProvider';
import PrivateRoute from './utility/PrivateRoute';
import Details from './components/Details/Details';
import MyCart from './components/MyCart/MyCart';

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
        element:(
          
         <AddProduct></AddProduct>
          
        ) 
      },
      {
        path: '/fashion/:id',
        element: (
          
            <ProductDetails></ProductDetails> 
          
        ),
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login> ,
      },
      {
        path: '/cart/:id',
        element: <MyCart></MyCart>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
