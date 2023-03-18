import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Card = (props: Props) => {
  return (
    <div className={`border p-1 ${props.className ?? ''}`}>{props.children}</div>
  )
}

export default Card