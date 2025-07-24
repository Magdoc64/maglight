import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import Projects from './pages/Projects/Projects'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Mention from './pages/Mention/Mention'
import Politique from './pages/Politique/Politique'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop/>
      <div className='global container'>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:linkService" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/mention' element={<Mention />} />
            <Route path='/politique' element={<Politique />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </div>
      <Footer/>
    </Router>
  </StrictMode>,
)
