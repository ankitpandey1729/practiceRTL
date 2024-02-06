import React from 'react';
import renderer from 'react-test-renderer';
import MyTitle from '../components/MyTitle';

test('MyTitle snapshot', () => {
  const component = renderer.create(<MyTitle title="Hello, New Snapshot!" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
