import styled from 'styled-components/native'

import { theme } from '../../../../../theme'

export const Button = styled.TouchableOpacity`
  width: 104px;
  height: 112px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  margin: 0 8px;
  background: ${ theme.background.secondary };
`

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  font-family: ${ theme.fonts.medium };
  color: ${ theme.colors.primary };
`
