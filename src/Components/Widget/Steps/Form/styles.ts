import styled from 'styled-components/native'
import { theme } from '../../../../theme'

export const FormContainer = styled.View`
  flex: 1;
  height: 100px;
`

export const Input = styled.TextInput.attrs((_ = {}) => ({ ..._ }))`
  padding: 10px;
  color: ${ theme.colors.primary };
  margin-bottom: 30px;
`
