import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Player from './Player';

test.skip('renders team name', async () => {
  const { container } = render(
    <MemoryRouter>
      <Player match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Betty Grey Deb E. Downer');
  expect(container).toMatchSnapshot();
});
