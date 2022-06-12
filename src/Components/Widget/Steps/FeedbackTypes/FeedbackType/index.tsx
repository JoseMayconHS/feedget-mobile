import React from 'react'
import { IconProps } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

export interface FeedbackTypeProps extends TouchableOpacityProps {
  title: string
  Icon(props?: IconProps): JSX.Element
}

export function FeedbackType({ title, Icon, ...rest }: FeedbackTypeProps) {
  return (
    <S.Button {...rest}>
      { Icon({ size: 40 }) }
      <S.Title>{ title }</S.Title>
    </S.Button>
  )
}
