import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon } from '@monorail/icon/Icon'
import {
  Colors,
  getColor,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/helpers/exports'

const iconSize = 32

type CCAlertBoxProps = {
  cssOverrides?: SimpleInterpolation
  label?: ReactNode
}

export const CCAlertBox = styled.div<CCAlertBoxProps>(
  ({ cssOverrides }) => css`
    ${flexFlow('row')};

    background-color: ${getColor(Colors.Red, 0.15)};
    border-radius: 4px;
    flex-shrink: 0;
    height: 48px;
    position: relative; /* ::icon is pos: abs to this element. */

    &::before {
      bottom: 8px;
      content: '';
      left: 16px;
      position: absolute;
      width: 32px;
    }

    ${cssOverrides};
  `,
)

const StyledIconLeft = styled(Icon)`
  color: #f44336;
  margin: 8px 12px 8px 16px;
  position: relative; /* give z-index so ::before bg is behind icon */
`

const Title = styled.h1`
  ${typography(700, FontSizes.Title3)};

  color: ${getColor(Colors.Black89)};
  margin: 16px 0;
`

const AlertDetails = styled.span`
  ${typography(300, FontSizes.Content)};

  color: ${getColor(Colors.Black89)};
  margin: auto 48px auto auto;
`

type AlertBoxProps = CCAlertBoxProps & {
  icon: string
  key?: string | number
}

export class AlertBox extends Component<AlertBoxProps> {
  render() {
    const { icon, label, cssOverrides } = this.props

    return (
      <CCAlertBox label={label} cssOverrides={cssOverrides}>
        <StyledIconLeft icon={icon} size={iconSize} />

        {label && <Title>{label}</Title>}
        <AlertDetails>
          <ul>
            <li>• Recertification overdue</li>
          </ul>
        </AlertDetails>
      </CCAlertBox>
    )
  }
}
