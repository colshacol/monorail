import React, { ChangeEvent, Component, MouseEvent, RefObject } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon, IconProps } from '@monorail/icon/Icon'
import { IconButton } from '@monorail/buttons/IconButton'
import {
  buttonTransition,
  Colors,
  colors,
  FontSizes,
  flexFlow,
  typography,
  visible,
} from '@monorail/CommonStyles'

import {
  ButtonSize,
  ButtonDisplay,
  IconButtonShape,
} from '@monorail/buttons/buttonTypes'
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level'
import { Overwrite } from 'typelevel-ts'

//
// Styles
//

const BBSearchIconPos = 3

export const BBSearchContainer = styled.label<BBSearchContainerProps>`
  ${({ darkMode }) =>
    darkMode
      ? css`
          background: ${colors(Colors.White, 0.2)};
          border: 1px solid ${colors(Colors.White, 0.2)};

          &:hover {
            background: ${colors(Colors.White, 0.22)};
          }

          &:focus {
            background: ${colors(Colors.White, 0.24)};
          }
        `
      : css`
          border: 1px solid ${colors(Colors.Black, 0.08)};

          &:hover {
            border-color: ${colors(Colors.BrandLightBlue, 0.5)};
          }

          &:focus {
            border-color: ${colors(Colors.BrandLightBlue)};
          }
        `};

  ${flexFlow('row')};
  border-radius: 100px;
  box-sizing: border-box;
  overflow: hidden; /* So the child element (BBSearchInput) doesn't cut into BBSearchContainer's border */
  position: relative; /* position: relative; so that BBSearchIcon can be positioned absolute to this. */
  height: 24px;
  flex-shrink: 0;

  ${({ css: cssOverrides }) => cssOverrides};
`

const BBSearchIcon = styled<{ darkMode?: boolean } & IconProps>(
  ({ darkMode, ...otherProps }) => <Icon {...otherProps} />,
)`
  color: ${({ darkMode }) => darkMode && colors(Colors.White)};
  left: 8px;
  pointer-events: none;
  position: absolute;
  top: ${BBSearchIconPos}px;
`

export const BBSearchInput = styled.input<BBSearchInputProps>`
  ${({ darkMode }) =>
    darkMode
      ? css`
          background: ${colors(Colors.White, 0.2)};
          border: 0;
          color: ${colors(Colors.White)};

          ::placeholder {
            color: ${colors(Colors.White)};
          }

          &:hover {
            background: ${colors(Colors.White, 0.22)};
          }

          &:focus {
            background: ${colors(Colors.White, 0.24)};
          }
        `
      : css`
          border: 1px solid ${colors(Colors.Black, 0.08)};

          ::placeholder {
            color: ${colors(Colors.Black54)};
            font-style: italic;
            font-weight: 300;
          }

          &:hover {
            border-color: ${colors(Colors.BrandLightBlue, 0.5)};
          }

          &:focus {
            border-color: ${colors(Colors.BrandLightBlue)};
          }
        `};

  ${typography(500, FontSizes.Title5)};
  border: 0;
  flex: 1 1 100%;
  height: 100%;
  outline: none;
  padding: 0 22px 0 28px;

  border-radius: 100px;
  box-sizing: border-box;

  ${buttonTransition};
`
export type BBSearchInput = StyledHtmlElement<
  HTMLInputElement,
  BBSearchInputProps
>

//
// Types
//

export type BBSearchContainerProps = {
  css?: SimpleInterpolation
  searchRef?: RefObject<SearchRefType>
  darkMode: boolean
}

export type BBSearchInputProps = {
  darkMode: boolean
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  placeholder: string
  value?: string
}

export type SearchRefType = StyledHtmlElement<
  HTMLInputElement,
  BBSearchInputProps
>

type SearchProps = BBSearchContainerProps &
  Overwrite<
    BBSearchInputProps,
    {
      onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
    }
  >

//
// Component
//

export class Search extends Component<SearchProps> {
  static defaultProps = {
    darkMode: false,
    placeholder: 'Search',
  }

  render() {
    const {
      css: overrideCss,
      darkMode,
      onChange,
      placeholder = 'Search',
      value,
      onClick,
      searchRef,
    } = this.props

    return (
      <BBSearchContainer css={overrideCss} darkMode={darkMode}>
        <BBSearchIcon icon="search_icon" darkMode={darkMode} />

        <BBSearchInput
          className="new-input"
          darkMode={darkMode}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.currentTarget.value, event)
          }}
          placeholder={placeholder}
          type="text"
          value={value}
          onClick={onClick}
          ref={searchRef}
        />

        <IconButton
          darkMode
          css={css`
            ${visible(!!value)};

            background: ${colors(Colors.Black24)};
            border: 0;

            ${Icon} {
              color: ${colors(Colors.White)};
            }

            &:hover {
              background: ${colors(Colors.Black54)};
            }

            &:active {
              background: ${colors(Colors.Black24)};
            }

            position: absolute;
            top: ${BBSearchIconPos}px;
            right: ${BBSearchIconPos}px;
          `}
          size={ButtonSize.Dense}
          icon="close"
          onClick={event => {
            event.preventDefault()
            onChange('')
          }}
        />
      </BBSearchContainer>
    )
  }
}
