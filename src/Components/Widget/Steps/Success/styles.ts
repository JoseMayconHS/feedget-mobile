import styled from 'styled-components/native'

import { theme } from '../../../../theme'

export const SuccessContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const Title = styled.Text`
  color: ${ theme.colors.primary };
  font-family: ${ theme.fonts.medium };
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`
