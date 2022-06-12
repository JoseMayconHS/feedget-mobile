import React from 'react'
import { Image, ImageBackground, TouchableOpacityProps } from 'react-native'
import { Camera, Trash } from 'phosphor-react-native'

import * as S from './styles'

interface ScreenshotProps extends TouchableOpacityProps {
  screenshot?: string,
  onTakeShot(): void,
  onRemoveShot(): void
}

export function Screenshot({ screenshot, onRemoveShot, onTakeShot, ...rest }: ScreenshotProps) {
  return (
    <S.ScreenshotContainer
      { ...rest }
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot && (
          <S.Image
            source={{ uri: screenshot }}
          />
        )
      }
      {
        screenshot ? (
          <Trash size={18} weight='fill' />
        ) : (
          <Camera size={20} weight='bold' />
        )
      }
    </S.ScreenshotContainer>
  )
}
