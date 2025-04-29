import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/customers/HomePage'
import CustomersPage from './pages/customers/CustomersPage'
import ContainerMain from './components/ContainerMain'
import CustomerPage from './pages/customers/CustomerPage'
import CreateNewCustomerPage from './pages/customers/CreateNewCustomerPage'
import RootContextProvider from './context/RootContextProvider'
import EditCustomerPage from './pages/customers/EditCustomerPage'
import CategoriesPage from './pages/categories/CategoriesPage'
import CategoryPage from './pages/categories/CategoryPage'
import CreateNewCategoryPage from './pages/categories/CreateNewCategoryPage'
import EditCategoryPage from './pages/categories/EditCategoryPage'
import ProductPage from './pages/products/ProductPage'
import ProductsPage from './pages/products/ProductsPage'
import CreateNewProductPage from './pages/products/CreateNewProductPage'
import EditProductPage from './pages/products/EditProductPage'
import LocationsPage from './pages/locations/LocationsPage'
import LocationPage from './pages/locations/LocationPage'
import CreateLocationPage from './pages/locations/CreateLocationPage '
import EditLocationPage from './pages/locations/EditLocationPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <Header />
          <ContainerMain>
            <Routes>
                <Route index element={<HomePage />} />
                
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/locations/:id" element={<LocationPage />} />
                <Route path="/create-location" element={<CreateLocationPage />} />
                <Route path="/locations/:id/edit" element={<EditLocationPage />} />

                <Route path="/customers" element={<CustomersPage />} />
                <Route path="/customers/:id" element={<CustomerPage />} />
                <Route path="/create-customer" element={<CreateNewCustomerPage />} />
                <Route path="/customers/:id/edit" element={<EditCustomerPage />} />

                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/categories/:id" element={<CategoryPage />} />
                <Route path="/create-category" element={<CreateNewCategoryPage />} />
                <Route path="/categories/:id/edit" element={<EditCategoryPage />} />

                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/create-product" element={<CreateNewProductPage />} />
                <Route path="/products/:id/edit" element={<EditProductPage />} />
            </Routes>
            
          </ContainerMain>
        <Footer />
      </RootContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
