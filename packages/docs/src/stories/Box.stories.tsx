import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@slat-ui/react'

export default {
  title: 'Layout/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando</Text>
      </>
    ),
    isTransparency: false
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    },
    isTransparency: {
      control: {
        type: 'boolean'
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {Story()}
        </div>
      )
    }
  ],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
