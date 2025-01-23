import { reactive } from 'vue'

export const theme = reactive({
  mode: localStorage.theme || 'dark',
  schemes: {},
})

export function togglePalette() {
  theme.mode = theme.mode == 'dark' ? 'light' : 'dark'
}