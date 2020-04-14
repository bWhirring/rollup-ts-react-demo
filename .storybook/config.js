import { configure } from '@storybook/react'
import { themes } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

addons.setConfig({
  theme: themes.dark,
})

// configure(require.context('../src', true, /\.stories\.tsx$/), module)

configure(
  [
    // require.context('../docs/', true, /\.stories\.(js|tsx?|mdx)$/),
    require.context('../src/components/', true, /\.stories\.(js|tsx?|mdx)$/)
  ],
  module
)
