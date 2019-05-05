const createMediaQuery = n => `@media screen and (min-width:${n})`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

export const breakpoints = [32, 40, 48, 64].map(n => n + 'em')

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72]

// color palette
const black = '#000'
const white = '#FFF'
const gray = '#456'
const text = '#123'

const red = '#C00'
const orange = '#F81'
const yellow = '#FD2'
const green = '#0A0'
const blue = '#03F'
const violet = '#70B'

const jmRed = '#FA1967'
const jmBlue = '#0AC'

const error = red
const danger = orange
const success = green

const primary = blue
const secondary = orange

const colors = {
  black,
  white,
  text,
  gray,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,

  jmRed,
  jmBlue,

  // contextual
  error,
  danger,
  success,
  secondary,
  primary
}

export { colors }

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 2, 6]
export const radius = '2px'

export const maxContainerWidth = '1280px'

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
}

const theme = {
  boxShadows,
  breakpoints,
  colors,
  duration,
  fontSizes,
  maxContainerWidth,
  mediaQueries,
  radii,
  radius,
  space,
  timingFunctions,
  transitionDelays
}

export default theme
