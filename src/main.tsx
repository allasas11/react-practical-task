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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <Header />
          <ContainerMain>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/customers/:id" element={<CustomerPage />} />
              <Route path="/create-customer" element={<CreateNewCustomerPage />} />
              <Route path="/customers/:id/edit" element={<EditCustomerPage />} />
            </Routes>
            <Routes>
              
            </Routes>
          </ContainerMain>
        <Footer />
      </RootContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
