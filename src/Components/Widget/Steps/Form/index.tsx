import React, { useCallback, useRef, useState } from 'react'
import { captureScreen } from 'react-native-view-shot'

import { LoadingHOC } from '../../../LoadingHOC'
import { Screenshot } from './Screenshot'

import * as S from './styles'
import * as SS from '../_share/styles'

import { theme } from '../../../../theme'
import { Alert, TextInput } from 'react-native'
import { API, API_ENDPOINTERS } from '../../../../services/api'
import { FeedbackTypeKeys, ScreenshotType } from '../../../../utils/feedbackTypes'


export interface FormProps {
  onFeedbackSent(): void,
  updateLoader(isSendingFeedback: boolean): void,
  onComment(comment: string): void,
  feedbackType: FeedbackTypeKeys,
  comment: string,
  isSendingFeedback: boolean
}

export function Form({
  comment, isSendingFeedback, feedbackType,
  onFeedbackSent, updateLoader, onComment
}: FormProps) {
  const [screenshot, setScreenshot] = useState<ScreenshotType>(null)

  const inputRef = useRef<TextInput>()

  const _handleFeedbackSend = useCallback(async () => {
    if (!comment) {
      return inputRef.current?.focus()
    }

    updateLoader(true)

    try {
      await API.post(API_ENDPOINTERS.POST.feedback, {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64,${screenshot}`
      })

      onFeedbackSent()
    } catch (e) {
      console.log('REQUEST Error', e)
    } finally {
      updateLoader(false)
    }
  }, [comment, screenshot, inputRef])

  const _handleTakeShot = useCallback(async () => {
    const uri = await captureScreen({
      format: 'png',
      quality: 0.8,
      result: 'base64'
    })

    setScreenshot(() => uri)
  }, [])

  return (
    <S.FormContainer>
      <S.Input
        ref={inputRef}
        placeholder='Conte com detalhes o que aconteceu...'
        placeholderTextColor={theme.colors.primary}
        onChangeText={onComment}
        autoCorrect={false}
      />
      <SS.SubmitContainer>
        <Screenshot
          onRemoveShot={() => setScreenshot(null)}
          onTakeShot={_handleTakeShot}
          screenshot={screenshot}
        />
        <SS.Submit
          disabled={isSendingFeedback}
          onPress={_handleFeedbackSend}
        >
          <LoadingHOC
            Component={() => <SS.SubmitText>Enviar feedback</SS.SubmitText>}
            loading={isSendingFeedback}
          />
        </SS.Submit>
      </SS.SubmitContainer>

    </S.FormContainer>
  )
}
