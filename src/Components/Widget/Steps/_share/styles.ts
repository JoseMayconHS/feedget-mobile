import styled from 'styled-components/native'

import { theme } from '../../../../theme'

export const SubmitContainer = styled.View`
  flex-direction: row;
  margin-top: 2px;
`

export const Submit = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  height: 50px;
  border-radius: 4px;
  background: ${ theme.brand.normal };
  align-items: center;
  justify-content: center;
`

export const SubmitText = styled.Text`
  color: ${ theme.colors.primary };
  font-family: ${ theme.fonts.medium };
  font-size: 14px;
  font-weight: bold;
`
