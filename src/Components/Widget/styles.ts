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
