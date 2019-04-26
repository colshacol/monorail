import React, { Component, createRef, MouseEvent } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import {
  baseFocusStyles,
  Colors,
  getColor,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/helpers/exports'

import { CommonComponentType, LinkProps } from '@monorail/types'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import styled, { css } from 'styled-components'

const CCTab = styled.div<CCTabProps>(
  ({ cssOverrides }) => css`
    ${flexFlow('row')};
    ${typography(700, FontSizes.Title5)};

    align-items: center;
    color: ${getColor(Colors.BrandLightBlue)};
    cursor: pointer;
    min-height: 24px;
    padding: 0 8px;
    text-transform: uppercase;
    user-select: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }

    &:hover {
      background: ${getColor(Colors.BrandLightBlue, 0.08)};
    }

    &:active {
      background: ${getColor(Colors.BrandLightBlue, 0.16)};
    }

    ${baseFocusStyles()};

    ${cssOverrides};
  `,
)

type CCTabProps = CommonComponentType &
  LinkProps & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    isActive: boolean
  }

export type TabProps = CCTabProps & {
  index?: number
  setIndicator: (width: number, offsetLeft: number) => void
  updateIsActive: (i: number) => void
}

export class Tab extends Component<TabProps> {
  static defaultProps = {
    isActive: false,
    setIndicator: () => {},
    updateIsActive: () => {},
  }

  tabRef = createRef<HTMLDivElement>()

  componentDidMount() {
    this.callSetIndicator()
  }

  componentDidUpdate(prevProps: TabProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.callSetIndicator()
    }
  }

  callSetIndicator = () => {
    const { isActive, setIndicator, as } = this.props

    if (isActive && !isNil(this.tabRef.current)) {
      if (isNil(as)) {
        const tabElement = this.tabRef.current
        const tabClientRect = tabElement.getBoundingClientRect()
        const parentClientRect = tabElement.parentElement
          ? tabElement.parentElement.getBoundingClientRect()
          : { left: 0 }

        setIndicator(
          tabClientRect.width,
          tabClientRect.left - parentClientRect.left,
        )
      } else if (as === Link) {
        const tabElement = findDOMNode(this.tabRef.current) as HTMLAnchorElement
        const tabClientRect = tabElement.getBoundingClientRect()
        const parentClientRect = tabElement.parentElement
          ? tabElement.parentElement.getBoundingClientRect()
          : { left: 0 }

        setIndicator(
          tabClientRect.width,
          tabClientRect.left - parentClientRect.left,
        )
      }
    }
  }

  private onClick = (event: MouseEvent<HTMLDivElement>) => {
    const { updateIsActive, onClick, index } = this.props

    if (!isNil(updateIsActive) && !isNil(index)) {
      updateIsActive(index)
    }

    if (!isNil(onClick)) {
      onClick(event)
    }
  }

  render() {
    const { isActive, children, cssOverrides, as, to } = this.props

    return (
      <CCTab
        onClick={this.onClick}
        ref={this.tabRef}
        isActive={isActive}
        cssOverrides={cssOverrides}
        as={as}
        to={to}
      >
        {children}
      </CCTab>
    )
  }
}
