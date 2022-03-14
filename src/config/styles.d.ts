import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      fund: string
      text: string
      success: string
      danger: string
      red: string
      grayYellow: string
      yellow: string
      whitePrimary: string
      whiteSecondary: string
      gray: string
      grayLight: string
    }
    fonts: {
      h1: string
      h2: string
      h3: string
      h4: string
      h5: string
      h6: string
      txt: string
      txtBig: string
      txtmd: string
      txtsm: string
    }
  }
}
