/// <reference types="react" />
/// <reference types="styled-components/cssprop" />
import * as styledComponents from 'styled-components';
import { GlobalAppThemeInterface } from '@monorail/helpers/theme';
declare const styled: styledComponents.ThemedBaseStyledInterface<GlobalAppThemeInterface>, css: styledComponents.BaseThemedCssFunction<GlobalAppThemeInterface>, createGlobalStyle: <P extends object = {}>(first: styledComponents.CSSObject | TemplateStringsArray | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, GlobalAppThemeInterface>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, GlobalAppThemeInterface>>[]) => styledComponents.GlobalStyleComponent<P, GlobalAppThemeInterface>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<GlobalAppThemeInterface, GlobalAppThemeInterface>, any>;
export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
