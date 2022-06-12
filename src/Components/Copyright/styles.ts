import styled from 'styled-components/native'

import { theme } from '../../theme'

export const CopyrightContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Copyright = styled.Text`
  color: ${ theme.colors.primary };
  font-family: ${ theme.fonts.medium };
  margin-right: 10px;
`
