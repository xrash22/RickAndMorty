import 'styled-components/native'
import { theme } from '../themes'

type ThemeI = typeof theme

declare module "styled-components/native" {
  interface DefaultTheme extends ThemeI { }
}