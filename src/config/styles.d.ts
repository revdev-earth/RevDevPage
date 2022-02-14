import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      text: string
      gray: string
      success: string
      danger: string
    }
    fonts: {
      h1: string
      h2: string
      h3: string
      h4: string
      h5: string
      h6: string
      txt: string
      txtmd: string
      txtsm: string
    }
  }
}
