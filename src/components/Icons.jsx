const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

function Icon({ size = 20, className = "", children, viewBox = "0 0 24 24" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function IconPerformance({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path {...stroke} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Icon>
  )
}

export function IconDesign({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path {...stroke} d="M12 3a9 9 0 109 9c0-4.97-4.03-9-9-9z" />
      <circle cx="8.5" cy="10.5" r="1.25" fill="currentColor" />
      <circle cx="13.5" cy="7.5" r="1.25" fill="currentColor" />
      <circle cx="15" cy="13" r="1.25" fill="currentColor" />
    </Icon>
  )
}

export function IconResponsive({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <rect {...stroke} x="7" y="2" width="10" height="20" rx="2" />
      <path {...stroke} d="M11 18h2" />
    </Icon>
  )
}

export function IconCode({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path {...stroke} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </Icon>
  )
}

export function IconLocation({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path {...stroke} d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle {...stroke} cx="12" cy="10" r="2.5" />
    </Icon>
  )
}

export function IconEmail({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <rect {...stroke} x="3" y="5" width="18" height="14" rx="2" />
      <path {...stroke} d="M3 7l9 6 9-6" />
    </Icon>
  )
}

export function IconGithub({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function IconLinkedin({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function IconArrowRight({ size, className }) {
  return (
    <Icon size={size} className={className} viewBox="0 0 16 16">
      <path {...stroke} d="M3 8h10M9 4l4 4-4 4" />
    </Icon>
  )
}

export function IconDownload({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path {...stroke} d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </Icon>
  )
}

export function IconExternalLink({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path {...stroke} d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </Icon>
  )
}

export function IconSun({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <circle {...stroke} cx="12" cy="12" r="4" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </Icon>
  )
}

export function IconMoon({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path {...stroke} d="M21 14.5A9 9 0 1111.5 3a7 7 0 109.5 11.5z" />
    </Icon>
  )
}

const iconMap = {
  performance: IconPerformance,
  design: IconDesign,
  responsive: IconResponsive,
  code: IconCode,
  location: IconLocation,
  email: IconEmail,
  github: IconGithub,
  linkedin: IconLinkedin,
  arrowRight: IconArrowRight,
  download: IconDownload,
  externalLink: IconExternalLink,
  sun: IconSun,
  moon: IconMoon,
}

export function AppIcon({ name, size = 20, className = "" }) {
  const Component = iconMap[name]
  if (!Component) return null
  return <Component size={size} className={className} />
}
