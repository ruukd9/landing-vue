import { propic } from '@/lib/propicStore'
import { theme } from '@/lib/themeStore';

import {
  hexFromArgb,
  themeFromSourceColor,
  sourceColorFromImage
} from '@material/material-color-utilities'

// util
function hexToRgb(hex) {
  if(hex[0]=='#'){ hex = hex.substring(1) }
  var comps = hex.match(/.{1,2}/g)
  return `${parseInt(comps[0], 16)}, ${parseInt(comps[1], 16)}, ${parseInt(comps[2], 16)}`
}

// apply palette to DOM
export function setPalette() {
  const colors = theme.schemes[theme.mode]
  if(!colors){ return }

  document.documentElement.style.setProperty('--background', hexToRgb(colors.background))
  document.documentElement.style.setProperty('--primary', hexToRgb(colors.primary))
  document.documentElement.style.setProperty('--on-background', hexToRgb(colors.onBackground))
  document.documentElement.style.setProperty('--on-primary', hexToRgb(colors.onPrimary))
  document.querySelector('meta[name="theme-color"]').setAttribute("content", hexToRgb(colors.background))

  document.documentElement.dataset.theme = theme.mode
}

// get m3 palette from image
export async function getPaletteScheme() {
  const img = document.createElement("img")
  img.setAttribute('src', propic.path)
  img.setAttribute('crossorigin', 'anonymous')

  document.querySelector('link[id="favicon"]').setAttribute("href", propic.path)

  const sourceColor = await sourceColorFromImage(img)
  // const mainHct = Hct.fromInt(sourceColor)
  const m3theme = themeFromSourceColor(sourceColor)

  const dark = m3theme.schemes.dark
  const light = m3theme.schemes.light

  const palette = {
    dark: {
      primary: hexFromArgb(dark.primary),
      background: hexFromArgb(dark.background),
      onPrimary: hexFromArgb(dark.onPrimary),
      onBackground: hexFromArgb(dark.onBackground)
    },
    light: {
      primary: hexFromArgb(light.primary),
      background: hexFromArgb(light.background),
      onPrimary: hexFromArgb(light.onPrimary),
      onBackground: hexFromArgb(light.onBackground)
    }
  }

  return palette
}