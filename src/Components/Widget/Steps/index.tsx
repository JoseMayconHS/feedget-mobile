import React from 'react'
import { ArrowLeft } from 'phosphor-react-native'

import * as S from './styles'

import { FeedbackTypes } from './FeedbackTypes'
import { Form, FormProps } from './Form'
import { Success } from './Success'

import { FeedbackTypeKeys, feedbackTypes } from '../../../utils/feedbackTypes'

interface StepsProps extends FormProps {
  feedbackType: FeedbackTypeKeys,
  setFeedbackType(feedbackType?: FeedbackTypeKeys): void,
  feedbackSent: boolean,
  onBack(): void
}

export function Steps({
  feedbackType, feedbackSent,
  setFeedbackType,
  comment, loading,
  onComment, onFeedbackSent, updateLoader,
  onBack
}: StepsProps) {

  const feedbackInfo = feedbackTypes[feedbackType]

  return (
    <S.StepsContainer>
        {
          (feedbackType || feedbackInfo || !feedbackSent) && (
            <S.Header>
              <S.TitleContainer>
                {
                  (feedbackType && !feedbackSent) && (
                    <S.TitleIcon>
                      <feedbackInfo.Icon />
                    </S.TitleIcon>
                  )
                }
                {
                  !feedbackSent && (
                    <S.Title>{feedbackInfo?.title ?? 'Deixe seu feedback'}</S.Title>
                  )
                }
              </S.TitleContainer>
            </S.Header>
          )
        }
        {
          feedbackType && (
            <S.BackButton onPress={onBack}>
              <ArrowLeft />
            </S.BackButton>
          )
        }
      <S.Steps>
        {
          feedbackSent ? (
            <Success onBack={onBack} />
          ) :
            !feedbackType ? (
              <FeedbackTypes setFeedbackType={setFeedbackType} />
            ) : <Form
                onFeedbackSent={onFeedbackSent}
                comment={comment}
                loading={loading}
                onComment={onComment}
                updateLoader={updateLoader}
              />
        }
      </S.Steps>
    </S.StepsContainer>
  )
}
