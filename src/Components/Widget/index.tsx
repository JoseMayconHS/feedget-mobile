import React, { useCallback, useMemo, useRef, useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import ButtonSheet from '@gorhom/bottom-sheet'

import * as S from './styles'

import { Steps } from './Steps'

import { theme } from '../../theme'
import { FeedbackTypeKeys } from '../../utils/feedbackTypes'

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeKeys>('BUG')

  const buttonRef = useRef<ButtonSheet>(null)

  const snapPoints = useMemo(() => [1, 270], [])

  const _handleButtonSheet = useCallback(() => {
    buttonRef.current?.expand()
  }, [buttonRef])

  return (
    <>
      <S.Button onPress={ _handleButtonSheet }>
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
        onClose={() => setFeedbackType(null)}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.primary,
          width: 60
        }}
      >
        <Steps
          feedbackType={feedbackType}
          setFeedbackType={ setFeedbackType }
        />
      </ButtonSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)
