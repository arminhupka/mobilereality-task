import 'styled-components'
import { ThemeInterface } from '../../style/theme'

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeInterface {}
}
