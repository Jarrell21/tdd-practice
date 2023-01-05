import capitalize from './capitalize';

test('It is capitalized', () => {
  expect(capitalize('team')).toMatch('Team');
});

test('Multiple words are capitalized', () => {
  expect(capitalize('team fight tactics')).toMatch('Team Fight Tactics');
});
