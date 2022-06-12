import styled from 'styled-components/native'
import { theme } from '../../../../../theme'

export const ScreenshotContainer = styled.TouchableOpacity`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
  background: ${ theme.background.secondary };
  margin-right: 10px;
  justify-content: flex-end;
  align-items: flex-end;
`

export const Image = styled.ImageBackground`
  height: 50px;
  width: 50px;
  position: absolute;
`

export const IconButton = styled.TouchableOpacity`

`
