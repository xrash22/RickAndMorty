import React from 'react'
import { ImageStyled } from './styles'
import { ImageSourcePropType } from 'react-native'

interface IconProps {
  source: ImageSourcePropType
  width: number;
  height: number;
}

export const Icon: React.FC<IconProps> = ({ source, width, height }) => {
  return <ImageStyled source={source} width={width} height={height} />
}
