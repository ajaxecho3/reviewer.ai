import React, { type ReactNode } from 'react'
import * as PopoverComponent from '@radix-ui/react-popover';
type Props = {
  children?: ReactNode
  trigger: ReactNode
}

function Popover(props: Props) {
  return (
    <PopoverComponent.Root>
      <PopoverComponent.Trigger asChild>
        {
          props.trigger
        }
      </PopoverComponent.Trigger>
      {/* <PopoverComponent.Anchor /> */}
      <PopoverComponent.Portal>
        <PopoverComponent.Content
          sideOffset={5}
          className='PopoverContent'
        >
          {props.children}
          <PopoverComponent.Close />
          <PopoverComponent.Arrow className=' fill-white' />
        </PopoverComponent.Content>
      </PopoverComponent.Portal>
    </PopoverComponent.Root>
  )
}

export default Popover