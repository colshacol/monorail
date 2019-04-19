import React, { ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { AppIcon } from '@monorail/appIcon/AppIcon'
import { CommonComponentType } from '@monorail/types'
import { Icon } from '@monorail/icon/Icon'
import {
  AppOrAuthSubAppName,
  Colors,
  getColor,
  convertAppNameToColor,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/helpers/exports'

const HeaderRow = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    color: ${getColor(Colors.BrandDarkBlue)};
    ${flexFlow('row')};
    ${typography(500, FontSizes.Title3)};

    align-items: center;
    flex-shrink: 0;
    height: 48px;
    padding: 0 16px;

    ${cssOverrides};
  `,
)

const iconRightCss = css`
  color: ${getColor(Colors.BrandDarkBlue)};
  flex-shrink: 0;
  margin-right: 12px;
`

const iconLeftCss = css`
  color: ${getColor(Colors.BrandDarkBlue)};
  flex-shrink: 0;
  margin-left: 12px;
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
    ...otherProps
  }) => (
    <div {...otherProps}>
      <HeaderRow cssOverrides={cssHeaderRow}>
        {appIcon && <AppIcon cssOverrides={iconRightCss} appName={appIcon} />}
        {iconLeft && <Icon cssOverrides={iconRightCss} icon={iconLeft} />}
        {title}
        {actions}
      </HeaderRow>

      {children}
    </div>
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
