import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ContactPage } from './pages/Contact.page';
import { ProductPage } from './pages/Product.page';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}
