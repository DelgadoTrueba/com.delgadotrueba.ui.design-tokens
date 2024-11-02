import withTheme, { backgrounds, ThemeMdx } from './decorators/withTheme';
import "../src/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds,
  docs: {
    // MDX and Docs
    container: (props) => {
      return ThemeMdx(props)
    }
  }
}

export const decorators = [withTheme]