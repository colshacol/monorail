import React, { ComponentType } from 'react'
import { CustomIconProps } from '@monorail/icon/Icon'

export const StarOutline: ComponentType<CustomIconProps> = props => {
  return (
    <svg
      width="24"
      height="24"
      id="star-outline"
      viewBox="0 0 14 13"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.3333 4.82667L8.54 4.41333L6.66667 0L4.79333 4.42L0 4.82667L3.64 7.98L2.54667 12.6667L6.66667 10.18L10.7867 12.6667L9.7 7.98L13.3333 4.82667ZM6.66667 8.93333L4.16 10.4467L4.82667 7.59333L2.61333 5.67333L5.53333 5.42L6.66667 2.73333L7.80667 5.42667L10.7267 5.68L8.51333 7.6L9.18 10.4533L6.66667 8.93333Z" />
    </svg>
  )
}
