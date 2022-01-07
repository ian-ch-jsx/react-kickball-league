import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

test('renders list of players', async () => {
  const { container } = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  await screen.findByText('Betty Grey', 'Deb E. Downer');
  expect(container).toMatchSnapshot();
});
