import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './components/Layouts/Main';
import Orders from './components/Orders/Orders';
import Shop from './components/shop/Shop';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './components/Loaders/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [{
        path: '/',
        loader: () => {
          return fetch('products.json')
        },
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        loader: productsAndCartLoader,
        element: <Orders></Orders>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      }]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
