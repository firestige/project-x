import { ReactNode } from 'react'

export interface IconButtonProps {
  icon: string
  fontSize?: string
  className?: string
  onClick?: () => void
  children?: ReactNode
}

const IconButton = (props: IconButtonProps) => {
  const { icon, className, fontSize, onClick, children } = props
  const iconClass =
    fontSize === undefined ? `iconify ${icon}` : `iconify ${icon} ${fontSize}`
  return (
    <button className={className ?? ''} onClick={onClick} type="button">
      <span className={iconClass} />
      {children}
    </button>
  )
}

export default IconButton
