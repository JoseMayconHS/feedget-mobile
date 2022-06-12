import React from 'react'

import * as S from './styles'

import { FeedbackType } from './FeedbackType'

import { FeedbackTypeKeys, feedbackTypes } from '../../../../utils/feedbackTypes'

interface FeedbackTypesProps {
  setFeedbackType(feedbackType: FeedbackTypeKeys): void
}

export function FeedbackTypes({ setFeedbackType }: FeedbackTypesProps) {
  return (
    <S.FeedbackTypes>
      {
        Object.entries(feedbackTypes)
          .map(([key, value]) => (
            <FeedbackType
              key={key}
              title={value.title}
              Icon={value.Icon}
              onPress={() => setFeedbackType(key as FeedbackTypeKeys)}
            />
          ))
      }
    </S.FeedbackTypes>
  )
}
