import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UnderstandingPDAPage from './pages/UnderstandingPDAPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'
import AdaptedEDAQ8Page from './pages/AdaptedEDAQ8Page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="understanding-pda" element={<UnderstandingPDAPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="adapted-edaq8" element={<AdaptedEDAQ8Page />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
