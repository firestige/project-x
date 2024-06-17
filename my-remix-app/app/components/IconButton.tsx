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
  const generateIconClass = () =>
    fontSize === undefined ? `icon-[${icon}]` : `icon-[${icon}] ${fontSize}`
  return (
    <button className={className ?? ''} onClick={onClick}>
      <span className={generateIconClass()} />
      {children}
    </button>
  )
}

export default IconButton
