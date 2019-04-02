import styled, { css } from 'styled-components'
import { typography, FontSizes } from '@monorail/CommonStyles'
import { CommonComponentType, TypographyComponent } from '@monorail/types'

export const SectionTitle = styled.h1<
  CommonComponentType & TypographyComponent
>(
  ({ margin = '16px', cssOverrides }) => css`
    ${typography(500, FontSizes.Title3, margin)};

    ${cssOverrides};
  `,
)
