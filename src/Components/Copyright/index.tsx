import React from 'react'
import { Heart } from 'phosphor-react-native'

import * as S from './styles'

export function Copyright() {
  return (
    <S.CopyrightContainer>
      <S.Copyright>Feito com</S.Copyright>
      <Heart color='red' weight='fill' />
    </S.CopyrightContainer>
  )
}
