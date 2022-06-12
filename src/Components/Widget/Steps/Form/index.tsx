import React, { useCallback, useRef, useState } from 'react'

import { LoadingHOC } from '../../../LoadingHOC'
import { Screenshot } from './Screenshot'

import * as S from './styles'
import * as SS from '../_share/styles'

import { theme } from '../../../../theme'
import { Alert, TextInput } from 'react-native'


export interface FormProps {
  onFeedbackSent(): void,
  updateLoader(loading: boolean): void,
  onComment(comment: string): void,
  comment: string,
  loading: boolean
}

export function Form({
  comment, loading,
  onFeedbackSent, updateLoader, onComment
}: FormProps) {

  const inputRef = useRef<TextInput>()

  const _handleFeedbackSend = useCallback(async () => {
    if (!comment) {
      return inputRef.current?.focus()
    }

    updateLoader(true)

    setTimeout(() => {
      onFeedbackSent()
    }, 2000)
  }, [comment, inputRef])

  return (
    <S.FormContainer>
      <S.Input
        ref={ inputRef }
        placeholder='Conte com detalhes o que aconteceu...'
        placeholderTextColor={theme.colors.primary}
        onChangeText={onComment}
      />
      <SS.SubmitContainer>
        <Screenshot
          onRemoveShot={() => {}}
          onTakeShot={() => { }}
          screenshot='https://github.com/rodrigorgtic.png'
        />
        <SS.Submit
          disabled={loading}
          onPress={_handleFeedbackSend}
        >
          <LoadingHOC
            Component={() => <SS.SubmitText>Enviar feedback</SS.SubmitText>}
            loading={loading}
          />
        </SS.Submit>
      </SS.SubmitContainer>

    </S.FormContainer>
  )
}
