import { KIWIFY_URL } from '../../data/content'

export default function Button({ children, variant = 'primary', className = '', href, onClick, glow = false, icon = true, scrollTo }) {
  const isExternal = href || (!onClick && !scrollTo)
  const Tag = isExternal ? 'a' : 'button'
  const linkProps = Tag === 'a' ? { href: href || KIWIFY_URL, target: href ? undefined : '_blank', rel: href ? undefined : 'noopener noreferrer' } : {}

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault()
      const el = document.getElementById(scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (onClick) onClick(e)
  }

  if (variant === 'ghost') {
    return (
      <Tag
        {...linkProps}
        onClick={handleClick}
        className={`group inline-flex items-center justify-center gap-2 font-heading font-semibold text-accent border border-accent/25 rounded-lg px-6 py-3 text-sm tracking-wide transition-all duration-300 cursor-pointer hover:bg-accent/8 hover:border-accent/40 active:scale-[0.98] ${className}`}
      >
        {children}
      </Tag>
    )
  }

  if (variant === 'secondary') {
    return (
      <Tag
        {...linkProps}
        onClick={handleClick}
        className={`group inline-flex items-center justify-center gap-2 font-heading font-semibold text-white bg-surface-3 border border-white/[0.06] rounded-lg px-6 py-3 text-sm tracking-wide transition-all duration-300 cursor-pointer hover:bg-surface-4 hover:border-white/[0.1] active:scale-[0.98] ${className}`}
      >
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      {...linkProps}
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center gap-2.5 font-heading font-bold text-white rounded-xl px-8 py-4 text-lg tracking-wide cursor-pointer transition-all duration-300 active:scale-[0.97] overflow-hidden ${className}`}
    >
      {/* Background layers */}
      <span className="absolute inset-0 bg-accent rounded-xl" />
      <span className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-xl" />

      {/* Hover sweep */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent rounded-xl translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />

      {/* Bottom edge highlight */}
      <span className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Glow */}
      {glow && (
        <span className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl animate-glow-pulse -z-10" />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {icon && (
          <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        )}
      </span>
    </Tag>
  )
}
