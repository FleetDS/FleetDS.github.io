import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ContactPage } from './pages/Contact.page';
import { ProductPage } from './pages/Product.page';
import { FuelPage } from './pages/Fuel.page';
import { InfraPage } from './pages/Infra.page';
import { EVPage } from './pages/EV.page';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/fuel" element={<FuelPage />} />
        <Route path="/products/infra" element={<InfraPage />} />
        <Route path="/products/ev" element={<EVPage />} />
      </Routes>
    </HashRouter>
  );
}
