import { useState, useEffect } from 'react'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base/80 backdrop-blur-xl border-b border-border py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <img
          src="/logo-imersao-para-empresarios.png"
          alt="Imersão para Empresários"
          className="h-10 w-auto"
        />
        <Button variant="primary" icon={false} scrollTo="for-who" className="!py-2.5 !px-6 !text-sm !rounded-lg">
          Garantir vaga
        </Button>
      </div>
    </header>
  )
}
