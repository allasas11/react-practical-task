import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CustomersPage from './pages/CustomersPage'
import ContainerMain from './components/ContainerMain'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
        <ContainerMain>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/customers" element={<CustomersPage />} />
          </Routes>
        </ContainerMain>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
