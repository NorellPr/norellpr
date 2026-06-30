export default function LogoMark({ size = 20, color = '#510113', opacity = 1, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        WebkitMaskImage: 'url(/logo.png)',
        maskImage: 'url(/logo.png)',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        flexShrink: 0,
      }}
    />
  )
}
