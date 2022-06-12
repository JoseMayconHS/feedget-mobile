import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from "react-native"
import { theme } from '../theme'

interface LoadingHOCProps {
  Component(): JSX.Element,
  loading: boolean,
  activityIndicatorProps?: ActivityIndicatorProps
}

export function LoadingHOC({ Component, loading, activityIndicatorProps }: LoadingHOCProps) {
  return loading ? (
    <ActivityIndicator color={ theme.colors.primary } { ...activityIndicatorProps } />
  ) : <Component />
}
