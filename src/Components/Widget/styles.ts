import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { theme } from '../../theme'

export const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background: ${ theme.brand.normal };
  position: absolute;
  border-radius: 24px;
  right: 16px;
  bottom: ${ getBottomSpace() + 16 }px;
  align-items: center;
  justify-content:  center;
`

export const HandleComponent = styled.View`
  align-items: center;
  justify-content: center;
  background: ${ theme.background.primary };
  position: relative;
  height: 30px;
`

export const HandleComponentIndicator = styled.View`
  width: 70px;
  height: 5px;
  border-radius: 4px;
  background: ${ theme.colors.primary };
  margin: 5px 0;
`
