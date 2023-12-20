import '@/styles/components/_button.scss'

import Image from 'next/image'

export default function Button(props: {
  onClick?: any
  icon?: any
  children: string
  background: string
  text: string
  border?: string
  borderColor?: string
}) {
  return (
    <button
      className={`button ${props.background} ${props.text} ${props.border} ${props.borderColor}`}
      onClick={props.onClick}
    >
      {props.icon && (
        <Image className="button__icon" src={props.icon} alt={props.icon} />
      )}
      {props.children}
    </button>
  )
}
