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
  const src = variant === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'
  return (
    <img
      src={src}
      alt="Norell PR"
      aria-hidden={opacity < 1 ? 'true' : undefined}
      style={{ height, width: 'auto', opacity, display: 'block', flexShrink: 0 }}
    />
  )
}
