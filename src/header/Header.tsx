import React, { ReactNode } from 'react'
import { SimpleInterpolation } from 'styled-components'

import { AppIcon } from '@monorail/appIcon/AppIcon'
import {
  AppOrAuthSubAppName,
  convertAppNameToColor,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { Icon } from '@monorail/icon/Icon'
import { CommonComponentType } from '@monorail/types'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
const HeaderRow = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow('row')};

    align-items: center;
    color: ${getThemeColor(ThemeColors.Text1000)};
    flex-shrink: 0;
    height: 48px;
    padding: 0 16px;

    ${cssOverrides};
  `,
)

const HeaderContainer = styled.div``

export const HeaderTitle = styled.h1`
  ${typography(500, FontSizes.Title3)};
`

const iconLeftCss = css`
  color: ${getThemeColor(ThemeColors.Text1000)};
  flex-shrink: 0;
  margin-right: 12px;
`

type Props = CommonComponentType & {
  actions?: ReactNode
  appIcon?: AppOrAuthSubAppName
  cssHeaderRow?: SimpleInterpolation
  iconLeft?: string
  noBorder?: boolean
  title: ReactNode
}

export const Header = styled(
  ({
    actions,
    appIcon,
    children,
    cssOverrides,
    cssHeaderRow,
    iconLeft,
    noBorder = false,
    title,
    ...domProps
  }) => (
    <HeaderContainer {...domProps}>
      <HeaderRow cssOverrides={cssHeaderRow}>
        {appIcon && <AppIcon cssOverrides={iconLeftCss} appName={appIcon} />}
        {iconLeft && <Icon cssOverrides={iconLeftCss} icon={iconLeft} />}
        <HeaderTitle>{title}</HeaderTitle>
        {actions}
      </HeaderRow>

      {children}
    </HeaderContainer>
  ),
)<Props>(
  ({ noBorder, appIcon, cssOverrides }) => css`
    ${!noBorder &&
      css`
        &::after {
          content: '';
          background: ${appIcon
            ? getColor(convertAppNameToColor(appIcon))
            : '#ebebeb'};
          bottom: 0;
          height: 1px;
          left: 0;
          position: absolute;
          right: 0;
        }
      `};

    ${flexFlow()};
    position: relative;
    flex-shrink: 0;

    ${cssOverrides};
  `,
)
// tslint:enable
