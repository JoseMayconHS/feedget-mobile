import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'

import * as S from './styles'

import Widget from './Components/Widget'
import { theme } from './theme'
import { IconContext } from 'phosphor-react-native'

export default function App() {
  return (
    <S.default>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor={theme.background.primary} barStyle='light-content' />
        <IconContext.Provider
          value={{
            color: theme.colors.primary
          }}
        >
          <Widget />
        </IconContext.Provider>
      </GestureHandlerRootView>
    </S.default>
  )
}
