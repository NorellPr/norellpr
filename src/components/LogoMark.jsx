// star mark only (textured 8-point star, no wordmark)
export default function LogoMark({ variant = 'dark', size = 20, opacity = 1, className = '' }) {
  const src = variant === 'dark' ? '/star-dark.webp' : '/star-light.webp'
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{ width: size, height: size, opacity, display: 'block', flexShrink: 0 }}
      className={className}
    />
  )
}

// full wordmark (star mark + "NORELL PR" text)
export function LogoFull({ variant = 'dark', height = 28, opacity = 1, className = '' }) {
  const starSrc = variant === 'dark' ? '/star-dark.webp' : '/star-light.webp'
  const textSrc = variant === 'dark' ? '/logo-text-dark.svg' : '/logo-text-light.svg'
  return (
    <div
      aria-label="Norell PR"
      style={{ display: 'flex', alignItems: 'center', height, opacity, flexShrink: 0, gap: Math.round(height * 0.11) }}
      className={className}
    >
      <img src={starSrc} alt="" aria-hidden="true" style={{ height: Math.round(height * 0.88), width: 'auto' }} />
      <img src={textSrc} alt="" aria-hidden="true" style={{ height: Math.round(height * 0.68), width: 'auto' }} />
    </div>
  )
}
