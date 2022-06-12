import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

import { theme } from '../../../theme'

export const StepsContainer = styled.View`
  background: ${ theme.background.primary };
  padding-bottom: ${ getBottomSpace() + 16 }px;
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  margin-bottom: 32px;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 12px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const TitleIcon = styled.View`
  margin-right: 10px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${ theme.fonts.regular };
  color: ${ theme.colors.primary };
`

export const Steps = styled.View`
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
`
