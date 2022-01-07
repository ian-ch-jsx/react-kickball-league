import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Player from './Player';

test('renders player name', async () => {
  const { container } = render(
    <MemoryRouter>
      <Player match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Bennie Jetts');
  expect(container).toMatchSnapshot();
});
