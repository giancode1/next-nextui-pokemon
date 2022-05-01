import { createTheme } from "@nextui-org/react"

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // override dark theme colors
  }
});