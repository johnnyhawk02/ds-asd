import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UnderstandingPDAPage from './pages/UnderstandingPDAPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'
import AdaptedEDAQ8Page from './pages/AdaptedEDAQ8Page'
import BooksPage from './pages/BooksPage'
import VideosPage from './pages/VideosPage'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="understanding-pda" element={<UnderstandingPDAPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="adapted-edaq8" element={<AdaptedEDAQ8Page />} />
          <Route path="search" element={<SearchResultsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
