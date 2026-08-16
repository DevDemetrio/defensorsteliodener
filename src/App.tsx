import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './pages/Home'

function ScrollToPageSection() {
  const { hash, pathname, state } = useLocation()

  useEffect(() => {
    if (!hash) {
      if (pathname.startsWith('/municipios/') || state?.preserveScroll) return
      window.scrollTo({ top: 0 })
      return
    }

    window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }))
  }, [hash, pathname, state])

  return null
}

export default function App() {
  return <><ScrollToPageSection /><Routes><Route path="/" element={<HomePage />} /><Route path="/biografia" element={<HomePage />} /><Route path="/noticias" element={<HomePage />} /><Route path="/noticias/:newsId" element={<HomePage />} /><Route path="/municipios/:municipalitySlug" element={<HomePage />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></>
}
