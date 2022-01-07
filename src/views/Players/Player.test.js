import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Player from './Player';

test('renders team name', () => {
  const { container } = render(
    <MemoryRouter>
      <Player match={{ params: { id: 3 } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
