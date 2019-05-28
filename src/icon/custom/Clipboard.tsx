import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/icon/Icon'

export const Clipboard: ComponentType<CustomIconProps> = props => (
  <svg height={24} width={24} viewBox="0 0 24 24" {...props}>
    <path d="M19 20H5V4h2v3h10V4h2m-7-2a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1m7 0h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
  </svg>
)
