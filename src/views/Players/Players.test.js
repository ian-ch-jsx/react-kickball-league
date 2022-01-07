import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

test('renders team name', async () => {
  const { container } = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  await screen.findByText('Betty Grey');
  expect(container).toMatchSnapshot();
});
