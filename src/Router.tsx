import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ContactPage } from './pages/Contact.page';
import { ProductPage } from './pages/Product.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
