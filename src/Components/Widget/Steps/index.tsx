import React from 'react'

import * as S from './styles'

import { Copyright } from '../../Copyright'
import { FeedbackTypes } from './FeedbackTypes'

import { FeedbackTypeKeys, feedbackTypes } from '../../../utils/feedbackTypes'
import { ArrowLeft } from 'phosphor-react-native'

interface StepsProps {
  feedbackType: FeedbackTypeKeys,
  setFeedbackType(feedbackType: FeedbackTypeKeys): void
}

export function Steps({ feedbackType, setFeedbackType }: StepsProps) {
  const feedbackInfo = feedbackTypes[feedbackType]

  return (
    <S.StepsContainer>
      <S.Header>
        <S.TitleContainer>
          {feedbackType && (
            <S.TitleIcon>
              <feedbackInfo.Icon />
            </S.TitleIcon>
          )}
          <S.Title>{feedbackInfo?.title ?? 'Deixe seu feedback'}</S.Title>
        </S.TitleContainer>
        {
          feedbackType && (
            <S.BackButton onPress={() => setFeedbackType(null) }>
              <ArrowLeft />
            </S.BackButton>
          )
        }
      </S.Header>
      <S.Steps>
        {
          !feedbackType ? (
            <FeedbackTypes setFeedbackType={ setFeedbackType } />
          ) : null
        }
      </S.Steps>
      <Copyright />
    </S.StepsContainer>
  )
}
