import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CustomersPage from './pages/CustomersPage'
import ContainerMain from './components/ContainerMain'
import CustomerPage from './pages/CustomerPage'
import CreateNewCustomerPage from './pages/CreateNewCustomerPage'
import RootContextProvider from './context/RootContextProvider'

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
              <Route path="/create-new-customer" element={<CreateNewCustomerPage />} />
            </Routes>
          </ContainerMain>
        <Footer />
      </RootContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
