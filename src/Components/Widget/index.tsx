import React, { useCallback, useMemo, useRef, useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import ButtonSheet from '@gorhom/bottom-sheet'

import * as S from './styles'

import { Steps } from './Steps'

import { theme } from '../../theme'
import { FeedbackTypeKeys } from '../../utils/feedbackTypes'
import { Copyright } from '../Copyright'

function HandleComponent() {
  return (
    <S.HandleComponent>
      <S.HandleComponentIndicator />
      <Copyright />
    </S.HandleComponent>
  )
}

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeKeys>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const [isSendingFeedback, setLoading] = useState(false)
  const [comment, setComment] = useState('')

  const buttonRef = useRef<ButtonSheet>(null)

  const snapPoints = useMemo(() => [1, 270], [])

  const _handleRestore = useCallback(() => {
    setLoading(() => false)
    setFeedbackSent(() => false)
    setComment(() => '')
    setFeedbackType(() => null)
  }, [])

  const _handleButtonSheet = useCallback(() => {
    // _handleRestore()
    buttonRef.current?.expand()
  }, [buttonRef])

  return (
    <>
      <S.Button onPress={_handleButtonSheet}>
        <ChatTeardropDots color='#FFF' />
      </S.Button>

      <ButtonSheet
        ref={buttonRef}
        snapPoints={snapPoints}
        handleStyle={{
          backgroundColor: theme.background.primary,
          paddingTop: 15,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15
        }}
        onChange={index => {
          if (!index) {
            _handleRestore()
          }
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.primary,
          width: 60
        }}
        handleComponent={HandleComponent}
        backgroundStyle={{
          backgroundColor: theme.background.primary
        }}
      >
        <Steps
          feedbackType={feedbackType}
          setFeedbackType={setFeedbackType}

          comment={comment}
          onComment={setComment}
          isSendingFeedback={isSendingFeedback}
          updateLoader={setLoading}
          onFeedbackSent={() => setFeedbackSent(true)}
          feedbackSent={feedbackSent}
          onBack={_handleRestore}
        />
      </ButtonSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)
