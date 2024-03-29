import React from 'react'
import styled, { css } from 'styled-components'

import { Colors, getColor } from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'

type Props = CommonComponentType & {
  size?: number
  inactive?: boolean
}

export const Status = styled.div<Props>(
  ({ cssOverrides, size = 16, inactive = false }) => css`
    background: ${getColor(Colors.BrandLightBlue)};
    background: ${getColor(inactive ? Colors.Black54 : Colors.BrandLightBlue)};
    border-radius: ${size / 2}px;
    color: ${getColor(Colors.White)};
    flex-shrink: 0;
    font-size: ${size - 5}px;
    font-weight: 700;
    height: ${size}px;
    min-width: ${size}px;
    padding: 0 ${size / 4}px;
    text-align: center;
    line-height: ${size}px;
    display: inline-block;

    ${cssOverrides};
  `,
)
