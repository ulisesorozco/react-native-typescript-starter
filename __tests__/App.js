import 'react-native'
import React from 'react'
import { Text } from '../src/components'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('Keyboard component renders correctly', () => {
  const tree = renderer.create(
    <Text text="test" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
