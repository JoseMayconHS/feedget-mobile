import styled from 'styled-components/native'

import { theme } from '../../theme'

export const CopyrightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  position: absolute;
  right: 10px;
`

export const Copyright = styled.Text`
  color: ${ theme.colors.primary };
  font-family: ${ theme.fonts.medium };
  margin-right: 10px;
`
