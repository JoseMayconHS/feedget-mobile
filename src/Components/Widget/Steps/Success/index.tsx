import React from 'react'
import { CheckSquare } from 'phosphor-react-native'

import * as S from './styles'
import * as SS from '../_share/styles'

interface SuccessProps {
  onBack(): void
}

export function Success({ onBack }: SuccessProps) {
  return (
    <S.SuccessContainer>
      <CheckSquare size={ 60 } weight='fill' color='green' />
      <S.Title>Agradecemos seu feedback!</S.Title>
      <SS.SubmitContainer>
        <SS.Submit
          onPress={ onBack }
        >
          <SS.SubmitText>Enviar outro</SS.SubmitText>
        </SS.Submit>
      </SS.SubmitContainer>
    </S.SuccessContainer>
  )
}
