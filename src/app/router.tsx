import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '@/pages/About/AboutPage'
import { ContactPage } from '@/pages/Contact/ContactPage'
import { HomePage } from '@/pages/Home/HomePage'
import { PrivacyPage } from '@/pages/Privacy/PrivacyPage'
import { ProgramsPage } from '@/pages/Programs/ProgramsPage'
import { ServicesPage } from '@/pages/Services/ServicesPage'
import { TermsPage } from '@/pages/Terms/TermsPage'
import { ScrollToTop } from './ScrollToTop'

export function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
      </Routes>
    </>
  )
}
